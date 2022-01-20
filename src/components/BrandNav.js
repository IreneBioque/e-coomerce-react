import React from 'react';
import { Navbar} from 'react-bootstrap';
// importamos imagen como componente
import {ReactComponent as Logo} from '../images/logo.svg'

import '../styles/Components/TopMenu.scss'


function BrandNav() {

    return (
      <Navbar.Brand>
          <Logo/>
          <h2>Gelatos Viyuela</h2>
      </Navbar.Brand>
    );
  }
  
  export default BrandNav;
  