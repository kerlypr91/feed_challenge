import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk'
import createRootReducer from '../reducers'
import rootSaga from '../sagas'
// import { routerMiddleware } from 'connected-react-router'
// import { createBrowserHistory } from 'history'

// export const history = createBrowserHistory({
//   basename: '/caregiver/'
// })

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer(),
  compose(applyMiddleware(sagaMiddleware)) // thunk
)

sagaMiddleware.run(rootSaga)

export default store
