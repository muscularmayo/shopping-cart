import './expandedshopitem.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';
import store from './store.js'
import { addToShoppingCart } from './shoppingCartSlice.js'

const ExpandedShopItem = (props) => {
  const id = Number(useParams().id)
  const shoppingCartState = useSelector(state => state.shoppingCart)
  const shopItemObject = useSelector(state => state.shopData.shopArray[id])
  const reduxCart = useSelector(state => state.shoppingCart.shoppingCartArray)

  const [shopItem, setShopItem] = useState(shopItemObject)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log('reduxCart', reduxCart)
  useEffect(()=> {
    if (shopItemObject === undefined) {
      undefinedShopItem()
    } else {
      setShopItem(shopItemObject)
      setLoading(false)
    }
    async function undefinedShopItem() {
      const response = await axios.get(`https://fakestoreapi.com/products/${id+1}`)
      const data = response.data;
      console.log(data)
      const fixedData = { ...data }
      fixedData.name = data.title
      fixedData.description = data.description.charAt(0).toUpperCase() + data.description.slice(1);
      fixedData.price = '$' + data.price.toFixed(2)
      fixedData.img = data.image
      setShopItem(fixedData)
      setLoading(false)
      return;
    }
  }, [shopItemObject, id])

  const addToReduxCart = () => {
    // console.log(shopItem)
    dispatch(addToShoppingCart(shopItem))
    // reduxCart.push(shopItem)
    // addToShoppingCart(shopItem)
    // console.log('reduxCart after button', reduxCart)
  }



  //if shopItem is undefined, we should fetch the info, right now we are assuming that we navigated here through /shop/

  return (
    <div className="expanded-shop-item modal">
      {loading === false ? (
        <div className="modal-content">
          <img className="expanded-shop-item-image" src={shopItem.img} alt='{props.item.img}'/>
          <div className="expanded-shop-info">
            <div className="expanded-item-title item-title">
              {shopItem.name}
            </div>
            <div className="expanded-item-price item-price">
              {shopItem.price}
            </div>
            <div className="expanded-item-description item-description">
              {shopItem.description}
            </div>
            <div className="expanded-item-rating">
              {shopItem.rating.rate + ' stars with ' + shopItem.rating.count + ' reviews.'}
            </div>
            <button onClick={() => addToReduxCart()}>Add to Cart</button>

          </div>

        </div>

      ) : (
        <LoadingScreen />
      )}
      <button className="back-to-shop" onClick={() => navigate('/shop')}>Back to Shop</button>
  </div>
  );
}

export default ExpandedShopItem;

/*

  return (
    <div>
      <h1>Shop</h1>
      {loading === false ? (
        <div className="shop-wrapper">
          <SideBar categories={setSideBarInfo()}/>
          <Catalog shopArray={shop.shopArray}/>
          </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
*/