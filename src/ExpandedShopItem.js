import './expandedshopitem.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ExpandedShopItem = (props) => {
  const id = Number(useParams().id)
  console.log(id, useParams())
  const shopItem = useSelector(state => state.shopData.shopArray[id])

  let navigate = useNavigate();



  //if shopItem is undefined, we should fetch the info, right now we are assuming that we navigated here through /shop/

  return (
    <div className="expanded-shop-item modal">
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
        <div className="expanded-item-rating">
          {shopItem.rating.rate + ' stars with ' + shopItem.rating.count + ' reviews.'}
        </div>
      </div>

  </div>
  );
}

export default ExpandedShopItem;
