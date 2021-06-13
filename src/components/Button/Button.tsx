import { FC } from "react";
import { StyledButton } from "./Button.element";

interface IButtonProps {
  label: string;
  clickHandler: () => void;
}
const Button: FC<IButtonProps> = ({ label, clickHandler }) => {
  return <StyledButton onClick={() => clickHandler()}>{label}</StyledButton>;
};

export default Button;
