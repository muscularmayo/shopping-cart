import './expandedshopitem.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.js';

const ExpandedShopItem = (props) => {
  const id = Number(useParams().id)
  const shopItemObject = useSelector(state => state.shopData.shopArray[id])

  const [shopItem, setShopItem] = useState(shopItemObject)
  const [loading, setLoading] = useState(true)
  console.log(shopItem)
  let navigate = useNavigate();

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
      fixedData.description = data.description.charAt(0).toUpperCase() + data.description.slice(1);
      fixedData.price = '$' + data.price.toFixed(2)
      fixedData.img = data.image
      console.log(fixedData)
      setShopItem(fixedData)
      setLoading(false)
      return;
    }
  }, [shopItemObject, id])



  console.log(shopItem)

  //if shopItem is undefined, we should fetch the info, right now we are assuming that we navigated here through /shop/

  return (
    <div className="expanded-shop-item modal">
      {loading === false ? (
        <div className="modal-content">
        <button onClick={() => navigate('/shop')}>Back to Shop</button>
        <img className="expanded-shop-item-image" src={shopItem.img} alt='{props.item.img}'/>
        <div className="expanded-item-title">
          {shopItem.name}
        </div>
        <div className="expanded-item-price">
          {shopItem.price}
        </div>
        <div className="expanded-item-description">
          {shopItem.description}
        </div>
        {/* <div className="expanded-item-rating">
          {shopItem.rating.rate + ' stars with ' + shopItem.rating.count + ' reviews.'}
        </div> */}
      </div>
      ) : (
        <LoadingScreen />
      )}
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