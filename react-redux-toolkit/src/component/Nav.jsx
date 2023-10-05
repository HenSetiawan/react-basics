/* eslint-disable react/prop-types */
import { Navbar, Container, Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Nav({ handleShowCart }) {
  return (
    <Navbar className="bg-body shadow-sm fixed-top">
      <Container className="d-flex justify-space-beetwen">
        <Navbar.Brand>
          <h3 className="fw-bold">R Store</h3>
        </Navbar.Brand>
        <Button
          className="ps-4 pe-4 d-flex align-items-center"
          onClick={handleShowCart}
        >
          <AiOutlineShoppingCart />
          <span className="ms-2">Cart (0)</span>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Nav;
