import './shopitem.css';
import { Link } from 'react-router-dom'
import Star from './Star.js'

const ShopItem = (props) => {
  let title = props.name;
  if (title.indexOf('(') !== -1) {
    let parenthIndex = title.indexOf('(')
    title = title.slice(0, parenthIndex)
  }

  function roundHalf (num) {
    return (Math.floor(num*2)/2).toFixed(1);
  }

  function starRating (num) {
    const roundedHalfRating = roundHalf(props.rating);
    for (let i = 0; i < 5; i++) {

    }
  }




  return (
    // <div className="shop-item" >
      <Link className="shop-item" to={'/shop/' + props.index}>
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
            {props.rating.rate} stars ({props.rating.count} reviews)
            <Star type="0.5"/>
          </div>
        </div>
    </Link>
    // </div>

  );
}

export default ShopItem;
