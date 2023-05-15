import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
//引入为Count组件服务的reducer
import allReducer from './reducers'
//暴露store,支持异步dispatch
export default createStore(allReducer, applyMiddleware(thunk))
