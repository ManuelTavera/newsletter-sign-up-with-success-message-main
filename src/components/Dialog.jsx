import styled from "styled-components";
import * as RuiDialog from "@radix-ui/react-dialog";

import checkIcon from "../assets/icon-list.svg";
import Button from "./Button";
import { COLORS } from "../../constant";
import { QUERIES } from "../../constant";

function Dialog({ open, onOpenChange, email, handleEmail }) {
  const handleOpenChange = (open) => {
    onOpenChange(open);
    handleEmail("");
  };

  return (
    <RuiDialog.Root open={open} onOpenChange={handleOpenChange}>
      <RuiDialog.Portal>
        <DialogOverlay />
        <DialogContent onPointerDownOutside={(e) => e.preventDefault()}>
          <IconWrapper>
            <Icon src={checkIcon} alt="Check icon" />
          </IconWrapper>
          <DialogTitle>Thanks for Subscribing!</DialogTitle>
          <DialogDescription>
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </DialogDescription>
          <RuiDialog.Close asChild>
            <SubmitButton>Dismiss message</SubmitButton>
          </RuiDialog.Close>
        </DialogContent>
      </RuiDialog.Portal>
    </RuiDialog.Root>
  );
}

const DialogOverlay = styled(RuiDialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  inset: 0;
`;

const DialogContent = styled(RuiDialog.Content)`
  background-color: ${COLORS["white"]};
  border-radius: 35px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  width: 450px;
  height: 450px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:focus {
    outline: none;
  }

  @media screen and (${QUERIES["phoneAndSmaller"]}) {
    height: 100%;
    border-radius: 0;
    justify-content: revert;
    padding: 20px;
  }
`;

const DialogTitle = styled(RuiDialog.Title)`
  font-family: "Roboto", sans-serif;
  font-size: ${48 / 16}rem;
  color: ${COLORS["darkSlateGray"]};
  font-weight: 700;
  line-height: 1;

  @media screen and (${QUERIES["phoneAndSmaller"]}) {
    margin-bottom: 25px;
    font-size: ${40 / 16}rem;
  }
`;

const DialogDescription = styled(RuiDialog.Description)`
  font-family: "Roboto", sans-serif;
  font-size: ${14 / 16}rem;
  color: ${COLORS["darkSlateGray"]};
`;

const IconWrapper = styled.div`
  height: 50px;
  width: 50px;

  @media screen and (${QUERIES["phoneAndSmaller"]}) {
    height: 60px;
    width: 60px;
    margin-top: 125px;
    margin-bottom: 50px;
  }
`;

const Icon = styled.img`
  height: 100%;
`;

const SubmitButton = styled(Button)`
  @media screen and (${QUERIES["phoneAndSmaller"]}) {
    margin-top: auto;
  }
`;

export default Dialog;
