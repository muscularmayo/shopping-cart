import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import shopDataReducer from './shopDataSlice'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';

export default configureStore({
  reducer: {
    counter: counterReducer,
    shopData: shopDataReducer,
  },
  applyMiddleware(thunk),
})
