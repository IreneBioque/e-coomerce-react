import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import BrandNav from './BrandNav';
import Cart from './Cart';
// import MenuNav from './MenuNav';

import '../styles/Components/TopMenu.scss'


function TopMenu(props) {
  const {productsCart, getProductsCart} = props;

    return (
      <Navbar bg="dark" variant='dark' className='top-menu'>
          <Container>
          <BrandNav/>
          <Cart productsCart={productsCart} getProductsCart={getProductsCart} />
          {/* <MenuNav /> */}
          </Container>
      </Navbar>
    );
  }
  
  export default TopMenu;
  