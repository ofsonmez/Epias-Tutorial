import { createStore, combineReducers, Store, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { horizontalValuesReducer, topVerticalValuesReducer, bottomVerticalValuesReducer } from "./Reducers";

const reducers = combineReducers({ horizontalValuesReducer, topVerticalValuesReducer, bottomVerticalValuesReducer });

export function configureStore(): Store<any> {
  return createStore(reducers, applyMiddleware(thunk));
}

export type RootState = ReturnType<typeof reducers>;
