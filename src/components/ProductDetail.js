import React from "react";
import { Col, Card, Button} from "react-bootstrap";
import '../styles/Components/ProductDetail.scss'

export default function ProductDetail(props) {
    const {product :{image, name, extraInfo, price, id}, addProductCart} = props;

    return (
        <Col xs={3} className="product" >
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{extraInfo}</Card.Text>
                <Card.Text>{price.toFixed(2)} €/ Unidad </Card.Text>
                <Button onClick={() => addProductCart(id, name)} >Añadir al carrito</Button>
            </Card.Body> 
        </Card>
        </Col>
    );
}