import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Navigation } from "../components/Navbar";

export const HeaderComponent = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (
        !document.getElementById("responsive-navbar-nav").contains(e.target)
      ) {
        $("#responsive-navbar-nav").collapse("hide");
      }
    });
  });

  return (
    <header className="header-component">
      <Header>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="transparent"
          className="navbar-dark"
        >
          <div
            className={showMe ? "navbar-toggler opened" : "navbar-toggler"}
            data-toggle="collapse"
            data-target="#responsive-navbar-nav"
            aria-controls="responsive-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggle}
          >
            <span></span>
          </div>
          <LinkItem href="#home">Kruse</LinkItem>
          <Navigation></Navigation>
        </Navbar>
      </Header>
    </header>
  );
};

const Header = styled.div`
  padding: 3.4rem 0;
  position: relative;
  display: flex;
  overflow: visible;
  outline: none;

  @media screen and (max-width: 991px) {
    padding: 2rem 0;

    .navbar {
      justify-content: flex-start;

      .navbar-toggler {
        margin-right: 1.2 rem;
      }
    }
  }

  @media (max-width: 991px) {
    .navbar {
      .navbar-toggler {
        border: none;
        height: 4rem;
        cursor: pointer;

        & span {
          margin: 0 auto;
          position: relative;
          top: 1.8rem;
          transition-duration: 0.1s;
          transition-delay: 0.5s;
          transition: background-color 0.2s;
          width: 2.2rem;
          height: 0.3rem;
          background-color: white;
          display: block;

          &::before,
          &::after {
            position: absolute;
            content: "";
            width: 2.2rem;
            height: 0.3rem;
            background-color: white;
            display: block;
            opacity: 1;
          }

          &::before {
            margin-top: -0.7rem;
            transition-property: margin, transform;
            transition-duration: 0.2s;
            transition-delay: 0.2s, 0;
          }

          &::after {
            margin-top: 0.7rem;
            transition-property: margin, transform;
            transition-duration: 0.2s;
            transition-delay: 0.2s, 0;
          }
        }
      }

      .navbar-collapse {
        position: absolute;
        left: -200px;
        top: -20px;
        right: 100%;
        padding: 3.2rem 3rem;
        width: 100%;
        transition: all 0.3s ease;

        .bottom-nav {
          position: absolute;
          bottom: 0;
          padding: 0 0 2.4rem 0;
          font-size: 1.6rem;
          line-height: 2.4rem;
        }

        .nav-item {
          .nav-link {
            color: black;
            font-size: 2rem;
            line-height: 3.2rem;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 32px;
            letter-spacing: 0.02em;
            font-feature-settings: "pnum" on, "lnum" on;
          }
        }

        &.collapsing {
          height: 100vh !important;
          margin-right: 50%;
          transition: all 0.3s ease;
          display: block;
          width: auto !important;
        }

        &.show {
          height: 100vh;
          width: 80vw;
          background-color: white;
          left: -8px;
        }
      }
    }
  }
`;

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
    font-size: 1.6rem;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      color: black !important;
    }
  }

  &:active {
    color: white;
  }
`;
