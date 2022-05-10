import './expandedshopitem.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { useState } from 'react';

const ExpandedShopItem = (props) => {
  const id = Number(useParams().id)
  console.log(id, useParams())
  const shopItemObject = useSelector(state => state.shopData.shopArray[id])

  const [shopItem, setShopItem] = useState(shopItemObject)

  console.log(shopItem)
  let navigate = useNavigate();

  if (shopItem === undefined) {
    const fetchedShopItem = undefinedShopItem()
    setShopItem(fetchedShopItem)
  }

  async function undefinedShopItem() {
    const response = await axios.get(`https://fakestoreapi.com/products/${id+1}`)
    const data = response.data;
    console.log(response, data)
    return data;
  }
  console.log(shopItem)

  //if shopItem is undefined, we should fetch the info, right now we are assuming that we navigated here through /shop/

  return (
    <div className="expanded-shop-item modal">
      {shopItem !== undefined ? (
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
        <p>loading...</p>
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