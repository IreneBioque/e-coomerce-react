import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
// importamos imagen como componente
import {ReactComponent as Logo} from '../images/logo.svg'

import '../styles/Components/TopMenu.scss'


function BrandNav() {

    return (
      <Navbar.Brand>
          <Logo/>
          <h2>La casa de los helados</h2>
      </Navbar.Brand>
    );
  }
  
  export default BrandNav;
  