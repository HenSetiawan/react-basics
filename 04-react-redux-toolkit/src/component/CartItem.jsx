/* eslint-disable react/prop-types */
import { Button, Row, Col } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { incrementCountById, decrementCountById, deleteProductById } from "../redux/reducer/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();
  return (
    <Row className="cart-item mt-4">
      <Col lg={2}>
        <img src={product.image} alt="image product" className="img-fluid" />
      </Col>
      <Col lg={6} className="mb-4">
        <h3>{product.title}</h3>
        <button
          className="btn-none pe-3 ps-3"
          onClick={() => dispatch(decrementCountById(product.id))}
        >
          -
        </button>
        <button disabled className="btn-none pe-3 ps-3">
          {product.count}
        </button>
        <button
          className="btn-none pe-3 ps-3"
          onClick={() => dispatch(incrementCountById(product.id))}
        >
          +
        </button>
      </Col>
      <Col lg={4}>
        <Button
          variant="outline-danger"
          onClick={() => dispatch(deleteProductById(product.id))}
        >
          <BsTrash />
        </Button>
        <p className="mt-4">$ {product.price}</p>
      </Col>
    </Row>
  );
}

export default CartItem;
