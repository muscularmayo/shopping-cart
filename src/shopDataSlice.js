import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const shopDataSlice = createSlice({
  name: 'shopData',
  initialState: {
    shopArray: [],
    status: 'idle',
    error: null,
    filter: null,
  },
  reducers: {
    setShopData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes


      state.shopArray = action.payload //possibly...


      }
    },
    extraReducers(builder) {
      builder
        .addCase(fetchShopData.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchShopData.fulfilled, (state, action) => {
          state.status = 'fulfilled'
          state.shopArray = action.payload
        })
        .addCase(fetchShopData.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }

//   },
})

// Action creators are generated for each case reducer function
export const { setShopData } = shopDataSlice.actions

// export const shopDataFetch = amount => dispatch => {

//   return async (dispatch, getState) => {

//   } state = {shopData: {},}
// }


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
    }
  })

  // state.shopArray = shopArray //or action.payload.shopArray
  // state.loading = false; //or action.payload.loading
  return shopArray;
})

// store.dispatch(fetchStore)

export default shopDataSlice.reducer
