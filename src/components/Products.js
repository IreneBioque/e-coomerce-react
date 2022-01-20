import React from "react";
import { Container, Row } from "react-bootstrap";
import Loading from './Loading'
import ProductDetail from "./ProductDetail";


export default function Products(props) {

    const {products:{result, loading, error}} = props;
    return (
        <Container>
            <Row>
                {/* Si loading es true o result no tiene nada */}
                {loading || !result ?(
                    <Loading />
                ): (
                    result.map((product, i)=> {
                        return(
                            <ProductDetail key={i} product={product}/>
                           
                        )
                       
                    })
                )}
            </Row>
        </Container>
    );
}