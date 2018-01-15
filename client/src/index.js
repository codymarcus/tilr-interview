import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

const store = compose(
  applyMiddleware(reduxThunk), window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)
registerServiceWorker()
