import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

 const sagaMiddleware=createSagaMiddleware();
 
 let composeEnhancers = null;
 if (process.env.NODE_ENV ==='development') {
     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
 } else {
     composeEnhancers = compose;
 }

 const store=createStore(
     rootReducer,
     composeEnhancers(
         applyMiddleware(sagaMiddleware),
     ),
 );

 sagaMiddleware.run(rootSaga);

 export default store;