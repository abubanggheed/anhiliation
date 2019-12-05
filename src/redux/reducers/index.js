
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from '../sagas'
import rulesParReducer from './rules-par.reducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    rulesParReducer
  }),
  applyMiddleware(
    ...(process.env.NODE_ENV === "development" ? [sagaMiddleware, logger] : [sagaMiddleware])
  )
)

sagaMiddleware.run(rootSaga)
export default store
