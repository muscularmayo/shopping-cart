import './shopitem.css';

const ShopItem = (props) => {
  return (
    <div className="shop-item">
      <img className="shop-item-image" src={props.img} alt={props.img}/>
      <div className="item-title">
        {props.name}
      </div>
      <div className="item-price">
        {props.price}
      </div>
      <div className="item-description">
        {props.description}
      </div>
  </div>
  );
}

export default ShopItem;
