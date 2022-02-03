
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from '../sagas'
import rulesParReducer from './rules-par.reducer'
import rulesAssetDesc from './rules-ref.reducer'
import statsReducer from './stats.reducer'
import diceReducer from './dice.reducer'
import sheetBasicReducer from './sheet-basic.reducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    rulesParReducer,
    rulesAssetDesc,
    statsReducer,
    diceReducer,
    sheetBasicReducer
  }),
  applyMiddleware(
    ...(process.env.NODE_ENV === "development" ? [sagaMiddleware, logger] : [sagaMiddleware])
  )
)

sagaMiddleware.run(rootSaga)
export default store
