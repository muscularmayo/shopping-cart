import { configureStore } from '@reduxjs/toolkit'
import shopDataReducer from './shopDataSlice'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';

export default configureStore({
  reducer: {
    shopData: shopDataReducer,
  },
  // applyMiddleware(thunk),
})
