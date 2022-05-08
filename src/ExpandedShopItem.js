import './expandedshopitem.css';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ExpandedShopItem = (props) => {
  //props = {item}
  const id = Number(useParams().id)
  console.log(id, useParams())
  const shopItem = useSelector(state => state.shopData.shopArray[id])

  return (
    <div className="expanded-shop-item modal">
      <div className="modal-content">
        <span className="close">&times;</span>
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
