import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "./modules/Product/FeatureProductReducer";
import singleProductReducer from "./modules/Product/SingleProductReducer";
import authReducer from "./modules/Login/LoginReducer";

const rootReducer = combineReducers({
  product: productReducer,
  singleProduct: singleProductReducer,
  auth: authReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
