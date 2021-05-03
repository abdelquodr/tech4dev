import React from 'react';
import {render} from 'react-dom';
import App from './App';
import  './css/style.css'

import { applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import produce from 'immer'
import { getPost } from './actions'

import { composeWithDevTools } from 'redux-devtools-extension'




// initailized state
const initialState = {
  loading: false,
  post: { },
  err: null,
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'FETCH_POST_BEGINS':
      draft.loading = action.loading
      return
    case 'FETCH_POST_SUCCESS':
      draft.loading = false;
      draft.post = action.post
      return
    case 'FETCH_POST_ERROR':
      draft.err = action.err
      return
    default:
      return initialState
  }
}, initialState)

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
store.dispatch(getPost())

render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


