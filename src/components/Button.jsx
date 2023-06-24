import styled from "styled-components";
import { COLORS } from "../../constant";

function Button({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

export default Button;

const Wrapper = styled.button`
  font-family: "Roboto", sans-serif;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  background-color: ${COLORS["darkSlateGray"]};
  color: ${COLORS["white"]};
  width: 100%;
  border-radius: 7px;
  font-size: ${16 / 16}rem;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(
      to right,
      hsl(347, 100%, 66%),
      ${COLORS["primary"]},
      hsl(13, 100%, 62%)
    );
    box-shadow: 0px 10px 15px 1px hsl(4, 100%, 80%);
    cursor: pointer;
    transition: all 0.8s ease-out;
  }
`;
