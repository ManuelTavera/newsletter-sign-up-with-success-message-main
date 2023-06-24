import styled from "styled-components";
import * as RuiDialog from "@radix-ui/react-dialog";

import checkIcon from "../assets/icon-list.svg";
import Button from "./Button";
import { COLORS } from "../../constant";

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
            <Button>Dismiss message</Button>
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
`;

const DialogTitle = styled(RuiDialog.Title)`
  font-family: "Roboto", sans-serif;
  font-size: ${48 / 16}rem;
  color: ${COLORS["darkSlateGray"]};
  font-weight: 700;
  line-height: 1;
`;

const DialogDescription = styled(RuiDialog.Description)`
  font-family: "Roboto", sans-serif;
  font-size: ${14 / 16}rem;
  color: ${COLORS["darkSlateGray"]};
`;

const IconWrapper = styled.div`
  height: 50px;
  width: 50px;
`;

const Icon = styled.img`
  height: 100%;
`;

export default Dialog;
