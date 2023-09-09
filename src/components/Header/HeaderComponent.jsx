import logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import { colorPrimario } from "../UI/variables";

const StyledHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${({ primary }) => (primary ? "white" : colorPrimario)};
  background-color: ${(props) => (props.primary ? "transparent" : "white")};
`;

export const HeaderComponent = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="#">
          Ayuda
        </BtnHeader>
        <BtnHeader href="#">Salir</BtnHeader>
      </div>
    </StyledHeader>
  );
};
