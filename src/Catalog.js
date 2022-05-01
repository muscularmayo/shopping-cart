import './catalog.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

const Catalog = () => {
  const [shopData, setShopData] = useState([])
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await axios('https://fakestoreapi.com/products')

  //   }
  //   fetchData();
  // }, []); // Or [] if effect doesn't need props or state
  async function fetchData () {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data)
        setShopData(data)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  useEffect(() => {
    fetchData();
  }, [])


  const setShopInfo = () => {
    return shopData.map((item) => {
      return (
        <div>
          {item.title + item.price + item.description}
          <img src={item.image} alt={item.image}/>
        </div>
      )
    })

  }

  return (
    <div className="catalog">
      <h3>Catalog</h3>
      <div>
        {setShopInfo()}
      </div>
    </div>
  );
}

export default Catalog;
