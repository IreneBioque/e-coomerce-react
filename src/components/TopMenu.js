import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import BrandNav from './BrandNav';
import MenuNav from './MenuNav';

import '../styles/Components/TopMenu.scss'


function TopMenu() {

    return (
      <Navbar bg="dark" variant='dark' className='top-menu'>
          <Container>
          <BrandNav/>
          {/* <MenuNav /> */}
          </Container>
      </Navbar>
    );
  }
  
  export default TopMenu;
  