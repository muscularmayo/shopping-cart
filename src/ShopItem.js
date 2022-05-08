import './shopitem.css';
import { Link } from 'react-router-dom'

const ShopItem = (props) => {
  return (
    <div className="shop-item">
      <Link to={'/shop/' + props.index}>
        <img className="shop-item-image" src={props.img} alt={props.img}/>
        <div className="item-title">
          {props.name}
        </div>
        <div className="item-price">
          {props.price}
        </div>
        {/* <div className="item-description">
          {props.description}
        </div> */}
      </Link>
  </div>
  );
}

export default ShopItem;
