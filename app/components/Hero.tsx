import { Header } from "../shared/Header";
import styled from "../styles/components/hero.module.scss";

export const Hero = () => {
  return (
    <section className={styled.heroComponent}>
      <div className="container">
        <Header />
      </div>
    </section>
  );
};
