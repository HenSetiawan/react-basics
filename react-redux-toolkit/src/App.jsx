import { Navbar, Container, Button, Card, Row, Col } from "react-bootstrap";
import getAllProducts from "./services/product";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isCartShowEd, setIsCartShowEd] = useState(false);

  const handleGetProducts = async () => {
    const dataProducts = await getAllProducts();
    setProducts(dataProducts);
  };

  const handleShowCart = () => {
    setIsCartShowEd((showed) => (showed = !showed));
    document.body.classList.toggle('hidden');
  };

  useEffect(() => {
    handleGetProducts();
  }, []);
  return (
    <>
      <Navbar className="bg-body-ligth nav-ligth shadow-sm">
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

      <Container className='mt-5'>
        <Row>
          {products.map((product) => {
            return (
              <Col key={product.id} lg={3} className="mb-5">
                <Card className="p-3 card-product">
                  <Card.Img
                    className="product-img"
                    variant="top"
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Text className="product-name">
                      {product.title}
                    </Card.Text>
                    <Card.Title>$ 109.95</Card.Title>
                    <Button
                      className="pe-5 ps-5 mt-2"
                      variant="secondary"
                      size="sm"
                    >
                      add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <div className={`cart-container ${isCartShowEd ? "d-blocl" : "d-none"} `}>
        <div className="cart-layer"></div>
        <div className="cart-content">
          <Container className="p-4">
            <div className="head d-flex justify-content-between">
              <h3>Cart</h3>
              <button
                onClick={handleShowCart}
                className="p-3 btn-close"
              ></button>
            </div>
            <Row className="cart-item mt-4">
              <Col lg={2}>
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  alt="image product"
                  className="img-fluid"
                />
              </Col>
              <Col lg={8}>
                <h3>Mens Casual Premium Slim Fit T-Shirts </h3>
                <button className="btn-none pe-3 ps-3">-</button>
                <button disabled className="btn-none pe-3 ps-3">
                  1
                </button>
                <button className="btn-none pe-3 ps-3">+</button>
              </Col>
              <Col lg={2}>
                <Button variant="outline-danger">
                  <BsTrash />
                </Button>
                <p className="mt-4">$ 22.3</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
