import styled from "styled-components";

const InputForm = styled.input`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.02em;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-feature-settings: "pnum" on, "lnum" on;
  height: 4.8rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 1px solid #5b626f;
  padding: 1.2rem 2rem;
`;

export const SearchBar = () => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <InputForm
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      ></InputForm>
    </form>
  );
};
