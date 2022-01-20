import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import BrandNav from './BrandNav';

import '../styles/Components/TopMenu.scss'


function MenuNav() {

    return (
      <Nav className='mr-auto' >
          <Nav.Link href='#'>Aperitivos</Nav.Link>
          <Nav.Link href='#'>Helados</Nav.Link>
          <Nav.Link href='#'>Mascotas</Nav.Link>
      </Nav>
    );
  }
  
  export default MenuNav;
  