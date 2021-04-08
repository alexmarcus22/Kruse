import { HeaderComponent } from "../shared/Header";
import { SearchBar } from "../components/SearchBar";
import styled from "styled-components";

export const Hero = () => {
  const title = "Krusn 2 U";
  const description = "Our services. Your Schedule";
  return (
    <HeroComponent>
      <div className="container">
        <div className="hero-header">
          <HeaderComponent />
          <SearchBar></SearchBar>
        </div>
        <div className="hero-content">
          <Title>{title}</Title>
          <Description>{description}</Description>
          <div className="row">
            <div className="col text-center d-flex d-lg-none justify-content-center">
              <ButtonHero>Browse Inventory</ButtonHero>
            </div>
          </div>
        </div>
      </div>
    </HeroComponent>
  );
};

const HeroComponent = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.81) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;

  .hero-header {
    margin-bottom: 12rem;
  }

  .hero-content {
  }
`;

const ButtonHero = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 10rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: white;
  font-style: normal;
  font-weight: 600;
`;

const Title = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 5.6rem;
  line-height: 5.6rem;
  letter-spacing: 0.02em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;

  @media (max-width: 991px) {
    font-size: 3.6rem;
    line-height: 4.8rem;
  }
`;

const Description = styled.p`
  color: white;
  font-size: 3.2rem;
  line-height: 4.4rem;
  letter-spacing: 0.02em;
  font-feature-settings: "pnum" on, "lnum" on;

  @media (max-width: 991px) {
    margin-bottom: 17rem;
    font-size: 2rem;
    line-height: 3.2rem;
  }
`;
