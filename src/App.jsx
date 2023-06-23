import styled from "styled-components";
import { COLORS } from "../constant";

import Newsletter from "./components/Newsletter";

function App() {
  return (
    <Wrapper>
      <Newsletter />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${COLORS["charcoalGrey"]};
  justify-content: center;
  align-items: center;
`;

export default App;
