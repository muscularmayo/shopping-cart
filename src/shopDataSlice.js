import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const shopDataSlice = createSlice({
  name: 'shopData',
  initialState: {
    shopArray: [],
    loading: true,
    error: null,
    filter: null,
  },
  reducers: {
    fetch: async (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(state)
      console.log(action.payload.shopArray)
      if (state.shopArray.length === 0) {
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
          }
        })

        state.shopArray = shopArray //or action.payload.shopArray
        state.loading = false; //or action.payload.loading

      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { fetch } = shopDataSlice.actions

export const shopDataFetch = amount => dispatch => {

  return async (dispatch, getState) => {

  }
}

export default shopDataSlice.reducer
