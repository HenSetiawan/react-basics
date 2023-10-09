/* eslint-disable react/prop-types */
import { Navbar, Container, Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Nav({ handleShowCart }) {
  const productsCart = useSelector((state) => state.cart.value);
  return (
    <Navbar className="bg-body shadow-sm nav-container">
      <Container className="d-flex justify-space-beetwen">
        <Navbar.Brand>
          <h3 className="fw-bold">R Store</h3>
        </Navbar.Brand>
        <Button
          className="ps-4 pe-4 d-flex align-items-center"
          onClick={handleShowCart}
        >
          <AiOutlineShoppingCart />
          <span className="ms-2">Cart ({productsCart.length})</span>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Nav;
