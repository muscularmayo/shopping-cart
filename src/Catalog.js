import './catalog.css';
import ShopItem from './ShopItem.js'
import { Routes, Route } from 'react-router-dom'
import ExpandedShopItem from './ExpandedShopItem.js'


const Catalog = (props) => {

  return (
    <div className="catalog">
      {props.shopArray.map((item) => {
        return (
          <ShopItem
            key={item.id}
            index={item.id-1}
            name={item.name}
            price={item.price}
            description={item.description}
            img={item.img}
            category={item.category}
            rating={item.rating}
          />
        )
      })}
    </div>
  );
}

export default Catalog;
