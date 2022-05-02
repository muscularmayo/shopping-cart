import './shopitem.css';

const ShopItem = (props) => {
  return (
    <div className="shop-item">
      <img className="shop-item-image" src={props.img} alt={props.img}/>
      <p>
        {props.name + props.price + props.description + props.category}
      </p>
  </div>
  );
}

export default ShopItem;
