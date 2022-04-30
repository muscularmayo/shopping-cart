import './shopitem.css';

const ShopItem = (props) => {
  return (
    <div className="shop-item">
      <img alt='shop item' src={props.src}></img>
      <div>{props.name}</div>
    </div>
  );
}

export default ShopItem;
