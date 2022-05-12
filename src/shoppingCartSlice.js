import { createSlice } from '@reduxjs/toolkit';


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCartArray: [],
    error: null,
  },
  reducers: {
    addToShoppingCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.shoppingCartArray.push(action.payload) //possibly...
      }
    },



})

// Action creators are generated for each case reducer function
export const { addToShoppingCart } = shoppingCartSlice.actions






// store.dispatch(fetchStore)

export default shoppingCartSlice.reducer
