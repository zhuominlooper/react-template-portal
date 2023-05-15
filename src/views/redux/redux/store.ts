import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
//引入为Count组件服务的reducer
import countReducer from './reducer'
//暴露store,支持异步dispatch
export default createStore(countReducer, applyMiddleware(thunk))
