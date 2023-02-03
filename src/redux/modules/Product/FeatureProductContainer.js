import { productAction} from './FeatureProductAction'
  import { connect } from "react-redux";
import FeatureProduct from "../../../components/FeatureProduct";
  
  const mapStateToProps = (state) => ({
    productResponse: state.product.featureProducts,
    // storestate.reducername.datavariable
  });
  
  const mapDispatchToProps = {
    productAction
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(FeatureProduct);