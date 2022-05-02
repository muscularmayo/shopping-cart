import './catalog.css';
import ShopItem from './ShopItem.js'
import { Routes, Route } from 'react-router-dom'
import ExpandedShopItem from './ExpandedShopItem.js'


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
      <Routes>
        <Route path="/shop/0" element={<ExpandedShopItem item={props.shopArray[0]} />} />
         {/* {props.shopArray.map((item, index) => {
           let path = `/shop/${index}`
           return (
             <Route path={path} element={<ExpandedShopItem item={item}/>}/>
           )
         })} */}
      </Routes>

    </div>
  );
}

export default Catalog;
