import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { isLoggedInContext, clearStorage } from '../utils';

const NavBar = () => {
  const { setAuthenticated } = useContext(isLoggedInContext);

  const logout = () => {
    clearStorage();
    setAuthenticated(false);
  };

  return (
    <Navbar color="light" expand="md" className="col-md-2 float-start" light>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar className="d-flex justify-content-center">
        <Nav vertical className="flex-column" navbar>
          <NavItem>
            <Link to="/posts">
              <NavLink>Posts</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/myposts">
              <NavLink>My Posts</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/createpost">
              <NavLink>Create Post</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="#">
              <NavLink onClick={logout}>Logout</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
