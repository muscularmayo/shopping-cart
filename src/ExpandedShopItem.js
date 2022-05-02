import './expandedshopitem.css';

const ExpandedShopItem = (props) => {
  return (
    <div className="expanded-shop-item">
      <img className="expanded-shop-item-image" src={props.item.img} alt={props.item.img}/>
      <div className="expanded-item-title">
        {props.item.name}
      </div>
      <div className="expanded-item-price">
        {props.item.price}
      </div>
      <div className="expanded-item-description">
        {props.item.description}
      </div>
      <div className="expanded-item-rating">
        {props.item.rating.rate + ' stars with ' + props.item.rating.count + ' reviews.'}
      </div>
  </div>
  );
}

export default ExpandedShopItem;
