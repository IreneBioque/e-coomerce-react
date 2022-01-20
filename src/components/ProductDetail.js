import React from "react";
import { Col, Card, Button} from "react-bootstrap";
import '../styles/Components/ProductDetail.scss'
import {BASE_PATH} from '../utils/constants'

export default function ProductDetail(props) {
    const {product :{image, name, extraInfo, price}} = props;

    return (
        <Col xs={3} className="product" >
        <Card>
            {/* <Card.Img variant="top" src={`${BASE_PATH}/${image}`} /> */}
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{extraInfo}</Card.Text>
                <Card.Text>{price} €/ Unidad </Card.Text>
                <Button>Añadir al carrito</Button>
            </Card.Body> 
        </Card>
        </Col>
    );
}