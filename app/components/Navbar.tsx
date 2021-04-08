import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";

export const Navigation = () => {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <LinkItem aria-current="page" href="#" className="nav-link">
          Shop new
        </LinkItem>
        <LinkItem aria-current="page" href="#" className="nav-link">
          Shop used
        </LinkItem>
        <LinkItem aria-current="page" href="#" className="nav-link">
          Finance
        </LinkItem>
        <LinkItem
          aria-current="page"
          href="#"
          className="nav-link d-lg-none d-block"
        >
          More
        </LinkItem>
      </Nav>
      <Nav className="mr-auto">
        <LinkItem
          aria-current="page"
          href="#"
          className="nav-link sub-link nav-link d-lg-none d-block"
        >
          Shop new
        </LinkItem>
        <LinkItem
          aria-current="page"
          href="#"
          className="nav-link sub-link nav-link d-lg-none d-block"
        >
          Shop used
        </LinkItem>
        <LinkItem
          aria-current="page"
          href="#"
          className="nav-link sub-link nav-link d-lg-none d-block"
        >
          Finance
        </LinkItem>
      </Nav>
      <div className="bottom-nav nav-link d-lg-none d-block">
        <p>912-210-5690 </p>
        <p>9:00 AM - 8:00 PM</p>
      </div>
    </Navbar.Collapse>
  );
};

const LinkItem = styled.a`
  color: white;
  font-size: 2.4rem;
  font-weight: 900;
  text-decoration: none;
  margin-right: 2rem;
  text-transform: uppercase;

  &:nth-child(0) {
    margin-left: 0;
    margin-right: 1rem;
  }

  &.nav-link {
    color: white !important;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 600;

    &:last-of-type:not(.sub-link) {
      margin-bottom: 3.2rem;
    }

    @media screen and (max-width: 768px) {
      color: black !important;

      &.sub-link {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
  }

  &:active {
    color: white;
  }
`;
