import './shopitem.css';
import { Link } from 'react-router-dom'
import StarRating from './StarRating.js'

const ShopItem = (props) => {
  let title = props.name;
  if (title.indexOf('(') !== -1) {
    let parenthIndex = title.indexOf('(')
    title = title.slice(0, parenthIndex)
  }





  return (
    // <div className="shop-item" >
      <Link className="shop-item" to={'/shopping-cart/shop/' + props.index}>
        <div className="shop-content">
          <div className='img-box'>
            <img className="shop-item-image" src={props.img} alt={props.img}/>
          </div>
          <div className="item-title">
            {title}
          </div>
          <div className="item-price">
            {props.price}
          </div>
          <div className="item-rating">
            <StarRating rating={props.rating.rate} reviews={props.rating.count} />
            {/* {props.rating.rate} stars ({props.rating.count} reviews) */}
            {/* <Star type="1"/>
            <Star type="1"/>
            <Star type="1"/>
            <Star type="0.5"/>
            <Star type="0"/> */}
          </div>
        </div>
    </Link>
    // </div>

  );
}

export default ShopItem;
