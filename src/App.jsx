import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constant";

import Newsletter from "./components/Newsletter";
import Dialog from "./components/Dialog";

function App() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <Wrapper>
      <Newsletter handleDialog={setOpen} handleEmail={setEmail} email={email} />
      <Dialog
        onOpenChange={setOpen}
        open={open}
        email={email}
        handleEmail={setEmail}
      />
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
