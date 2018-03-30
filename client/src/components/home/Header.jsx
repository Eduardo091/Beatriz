import React from 'react';
import {Nav,Navbar,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
const Header = (props) => (

  <section className="foodMenu">
    <div className="row-1">
      <div className="col-md-12">

        <div id="Nav">
          <Navbar>
            <Navbar.Header>
              Tacos Beatriz
            </Navbar.Header>
            <Nav>
                  <NavItem eventKey={0} href='/'>
                   Home
                  </NavItem>
                  <NavItem eventKey={1} src="www.tacosbeatriz.com">
                    Menu
                  </NavItem>
                  <NavItem eventKey={2} href="/catering">
                    Catering
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    About Us
                  </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
            </Nav>
          </Navbar>
        </div>
      </div>
    </div>
  </section>

)
export default Header;
