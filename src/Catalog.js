import './catalog.css';
import ShopItem from './ShopItem.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Catalog = (props) => {
  // return (
  //   <ShopItem
  //     key={item.id}
  //     name={item.title}
      // price={'$' + item.price.toFixed(2)}
      // description={description}
      // img={item.image}
      // category={item.category}
      // rating={item.rating}
  //   />
  // )

  return (
    <div className="catalog">
      {props.shopArray.map((item) => {
        return (
          <ShopItem
            key={item.id}
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
