import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productReducer from "./modules/Product/FeatureProductReducer"
import singleProductReducer from "./modules/Product/SingleProductReducer"


const rootReducer = combineReducers({
  product: productReducer,
  singleProduct:singleProductReducer,
});
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk))
)
export default store;
