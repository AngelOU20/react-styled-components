import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";
import PropTypes from "prop-types";

export const SwitcherTema = ({ tema }) => {
  const claro = <Icono src={themeOn} alt="Tema claro" />;
  const oscuro = <Icono src={themeOff} alt="Tema oscuro" />;

  return <>{tema ? oscuro : claro}</>;
};

SwitcherTema.propTypes = {
  tema: PropTypes.bool,
};
