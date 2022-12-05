import logo from "../img/logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <ContainerHeader>
      <img src={logo} alt="logoZapRecall" />
      <h1>ZapRecall</h1>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;