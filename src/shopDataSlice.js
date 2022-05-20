import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const shopDataSlice = createSlice({
  name: 'shopData',
  initialState: {
    shopArray: [],
    status: 'idle',
    error: null,
    filter: {
      price: [false, false, false],
      category: [], //[false,false,false,false] men's, jewelry, electronics, women's
      rating: [false, false, false, false],
      filterOn: false,
    },
  },
  reducers: {
    setShopData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes


      state.shopArray = action.payload //possibly...


      },
    setFilterData: (state, action) => {
      //action.payload = {type, index}
      //type = 'price','category','rating'
      const type = action.payload.type
      const index = action.payload.index

      state.filter[type][index] = !state.filter[type][index]
      for (const prop in state.filter) {
        if (prop === 'filterOn') {
          continue;
        }
        let currentCategory = state.filter[prop]
        for (let i = 0; i < currentCategory.length; i++) {
          console.log(currentCategory, currentCategory[i])
          if (currentCategory[i] === true) {
            state.filter.filterOn = true;
            return;
          } else {
            state.filter.filterOn = false;
          }
        }
      }

    },
    // toggleFilter: (state, action) => {
    //   //action.payload = boolean
    //   //if everything is false
    // }
  },
    extraReducers(builder) {
      builder
        .addCase(fetchShopData.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchShopData.fulfilled, (state, action) => {
          state.status = 'fulfilled'
          state.shopArray = action.payload
          let categories = state.shopArray.map((item) => {
            return item.category
          })
          categories = new Set(categories)
          categories = [...categories]
          console.log(categories)
          state.filter.category = new Array(categories.length).fill(false)
        })
        .addCase(fetchShopData.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }

//   },
})

// Action creators are generated for each case reducer function
export const { setShopData, setFilterData } = shopDataSlice.actions


export const fetchShopData = createAsyncThunk('shopData/fetchShopData', async () => {
  console.log('fetching...')
  const response = await axios.get('https://fakestoreapi.com/products')
  const data = response.data;

  const shopArray = data.map((item) => {
    const description = item.description.charAt(0).toUpperCase() + item.description.slice(1);

    return {
      id: item.id,
      name: item.title,
      price: '$' + item.price.toFixed(2),
      description: description,
      img: item.image,
      category: item.category,
      rating: item.rating,
      quantity: 1,
    }
  })


  return shopArray;
})


export default shopDataSlice.reducer
