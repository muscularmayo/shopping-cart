import { configureStore } from '@reduxjs/toolkit'
import shopDataReducer from './shopDataSlice.js'
import shoppingCartReducer from './shoppingCartSlice.js'

export default configureStore({
  reducer: {
    shopData: shopDataReducer,
    shoppingCart: shoppingCartReducer,
  },
  // applyMiddleware(thunk),
})
