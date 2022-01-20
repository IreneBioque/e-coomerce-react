import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Products(props) {

    const {products:{result, loading, error}} = props;
    return (
        <Container>
            <Row>
                {/* Si loading es true o result no tiene nada */}
                {loading || !result ?(
                    'Cargando'
                ): (
                    result.map((product, i)=> {
                        return(
                            <p>{product.name}</p>
                           
                        )
                       
                    })
                )}
            </Row>
        </Container>
    );
}