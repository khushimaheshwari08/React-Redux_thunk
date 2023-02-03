import { singleProductAction } from "./FeatureProductAction";
import { connect } from "react-redux";
import SingleProduct from "../../../SingleProduct";

const mapStateToProps = (state) => ({
  singleProductResponse: state.singleProduct.singleProducts,
});

const mapDispatchToProps = {
  singleProductAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
