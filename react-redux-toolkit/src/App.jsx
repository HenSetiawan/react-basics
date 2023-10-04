import { Navbar, Container, Button, Card, Row, Col } from "react-bootstrap";
import getAllProducts from "./services/product";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const handleGetProducts = async () => {
    const dataProducts = await getAllProducts();
    setProducts(dataProducts);
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
          <Button className="ps-4 pe-4 d-flex align-items-center">
            <AiOutlineShoppingCart />
            <span className="ms-2">Cart (0)</span>
          </Button>
        </Container>
      </Navbar>

      <Container className="mt-5">
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
    </>
  );
}

export default App;
