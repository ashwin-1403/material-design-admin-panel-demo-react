import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice';
import RootReducer from '../rootReducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
// import {watcherSaga} from '../sagas/rootsaga';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: RootReducer,
  middleware:[...getDefaultMiddleware({thunk:false}),sagaMiddleware]      //CONNECTING MIDDLEWARE TO STORE
})


export default store;
// START THE SAGA
// sagaMiddleware.run(watcherSaga);
