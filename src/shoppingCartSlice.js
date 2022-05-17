import { createSlice } from '@reduxjs/toolkit';


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCartArray: [],
    numberOfItems: 0,
    error: null,
  },
  reducers: {
    addToShoppingCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload)
      if(state.shoppingCartArray.filter((e) => {return e.id === action.payload.id}).length > 0) {
        state.shoppingCartArray.filter((e) => {return e.id === action.payload.id})[0].quantity++;
        state.numberOfItems = calculateNumberOfItems(state.shoppingCartArray)
      } else {
        state.shoppingCartArray.push(action.payload)
        state.numberOfItems = calculateNumberOfItems(state.shoppingCartArray)
      }
      //possibly...
      // return [...state.shoppingCartArray, action.payload]
      },
    removeFromShoppingCart: (state, action) => {
      //find the action.payload in the array and splice it out

    }
    //type: 'shoppingCart/addToShoppingCart
    //payload: {all item info, or maybe just id??}
  },





})

// Action creators are generated for each case reducer function
export const { addToShoppingCart } = shoppingCartSlice.actions

function calculateNumberOfItems (cartArray) {
  let numberOfItems = 0;
  cartArray.forEach((e) => {
    numberOfItems += e.quantity
  })
  return numberOfItems;
}
// export const addToCart = (item) => {
//   console.log(item)

//   return {
//     type: 'addToShoppingCart',
//     payload: item,
//   }; //??
// }

export default shoppingCartSlice.reducer
