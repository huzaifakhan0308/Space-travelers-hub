import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/planet.png';

const NavbarPg = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
    className=" border-bottom  "
  >
    <Container>
      <NavLink to="/" className="fw-bolder fs-3 text-white">
        <img
          alt=""
          src={logo}
          width="50"
          height="40"
          className="d-inline-block align-top"
        />
        {' '}
        Space Travelers&lsquo; Hub
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="fs-5 ">
        <Nav className="me-auto  flex-grow-1 pe-3 justify-content-end ">
          <NavLink
            to="rockets"
            className={({ isActive }) => (isActive
              ? 'linkNvb text-warning fw-bold border-top border-bottom border-warning'
              : ' text-white linkNvb')}
          >
            Rockets
          </NavLink>
          <NavLink
            to="missions"
            end
            className={({ isActive }) => (isActive
              ? 'linkNvb text-warning fw-bold border-top border-bottom border-warning'
              : ' text-white linkNvb')}
          >
            Missions
          </NavLink>
          <div className="vr bg-white mx-3" />
          <NavLink
            to="my-profile"
            className={({ isActive }) => (isActive
              ? 'linkNvb text-warning fw-bold border-top border-bottom border-warning'
              : ' text-white linkNvb')}
          >
            My Profile
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarPg;
