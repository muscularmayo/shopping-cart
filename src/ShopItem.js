import './shopitem.css';
import { Link } from 'react-router-dom'

const ShopItem = (props) => {
  return (
    <Link className="shop-item" to={'/shop/' + props.index}>
      <div className="shop-content">
        <div className='img-box'>
          <img className="shop-item-image" src={props.img} alt={props.img}/>
        </div>
        <div className="item-title">
          {props.name}
        </div>
        <div className="item-price">
          {props.price}
        </div>
        <div className="item-rating">
          {props.rating.rate} stars ({props.rating.count})
        </div>
      </div>
    </Link>
  );
}

export default ShopItem;
