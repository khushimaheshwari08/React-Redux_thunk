import { cartAction } from "./FeatureProductAction";
import { connect } from "react-redux";
import Cart from "../../../Cart";

const mapStateToProps = (state) => ({
  cartResponse: state.cart.cartProducts,
});

const mapDispatchToProps = {
    cartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);