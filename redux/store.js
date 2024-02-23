import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import sagas from "./saga";
import { RootReducer } from "./slices";
const config = {
  key: "root",
  storage: AsyncStorage,
  //   debug: true,
  blacklist: ["user"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(config, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(sagas);
export const persistor = persistStore(store);

export default store;

// import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import _ from 'lodash';
// import {createLogger} from 'redux-logger';

// import RootReducer from './slices';
// import sagas from './saga';

// const sagaMiddleware = createSagaMiddleware(),
//   store = createStore(
//     RootReducer,
//     {},
//     compose(applyMiddleware(sagaMiddleware, createLogger())),
//   );

// sagaMiddleware.run(sagas); /* .done.catch(e => {
//     if (_.has(e, 'message')) {
//         //console.log(e,'error')
//     }
// });
//  */
// export default store;
