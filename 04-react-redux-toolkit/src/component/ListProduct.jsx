/* eslint-disable react/prop-types */
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/reducer/cartSlice";

function ListProduct({ products }) {
  const dispatch = useDispatch();
  return (
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
                  <Card.Title>${product.price}</Card.Title>
                  <Button
                    className="pe-5 ps-5 mt-2"
                    variant="secondary"
                    size="sm"
                    onClick={() => dispatch(addProductToCart(product))}
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
  );
}

export default ListProduct;
