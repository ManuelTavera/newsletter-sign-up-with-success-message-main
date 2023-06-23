import styled from "styled-components";

import checkIcon from "../assets/icon-list.svg";

function Benefit({ feature }) {
  return (
    <Wrapper>
      <Icon>
        <img src={checkIcon} alt="Icon list" />
      </Icon>
      <Features>{feature}</Features>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Features = styled.p`
  font-size: ${16 / 16}rem;
  font-weight: 400;
`;

export default Benefit;
