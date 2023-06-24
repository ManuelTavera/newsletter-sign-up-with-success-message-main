import styled from "styled-components";
import * as Form from "@radix-ui/react-form";

import { COLORS } from "../../constant";
import Benefit from "./Benefit";
import Button from "./Button";
import desktopImage from "../assets/desktop.svg";

const features = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function Newsletter({ handleEmail, handleDialog, email }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleDialog(true);
  };

  const onEmailChange = (e) => {
    handleEmail(e.target.value);
  };

  return (
    <Wrapper>
      <LetterWrapper>
        <Header>Stay updated!</Header>
        <Body>Join 60,000+ product managers receiving monthly updates on:</Body>
        <BenefitWrapper>
          {features.map((item, index) => (
            <Benefit feature={item} key={index} />
          ))}
        </BenefitWrapper>
        <FormRoot onSubmit={handleSubmit}>
          <FormField>
            <LabelWrapper>
              <FormLabel>Email address</FormLabel>
              <FormMessage match="typeMismatch">
                Valid email required
              </FormMessage>
              <FormMessage match="valueMissing">
                Please enter your email
              </FormMessage>
            </LabelWrapper>
            <Form.Control asChild onChange={onEmailChange} value={email}>
              <Input type="email" required placeholder="email@company.com" />
            </Form.Control>
          </FormField>
          <Form.Submit asChild>
            <Button>Subscribe to monthly newsletter</Button>
          </Form.Submit>
        </FormRoot>
      </LetterWrapper>
      <ImageWrapper>
        <ImageDesktop src={desktopImage} alt="Desktop illustration" />
      </ImageWrapper>
    </Wrapper>
  );
}

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  align-items: baseline;
`;

const FormRoot = styled(Form.Root)`
  width: 100%;
`;

const FormField = styled(Form.FormField)`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled(Form.Label)`
  font-weight: 700;
  color: ${COLORS["darkSlateGray"]};
  font-size: ${11 / 16}rem;
`;

const FormMessage = styled(Form.Message)`
  font-size: ${11 / 16}rem;
  color: ${COLORS["primary"]};
  font-weight: 700;
`;

const Input = styled.input`
  height: 56px;
  padding: 0px 20px;
  border: 1px solid ${COLORS["grey"]};
  border-radius: 7px;
  color: ${COLORS["darkSlateGray"]};
  font-weight: 700;

  &::placeholder {
    color: ${COLORS["grey"]};
    font-weight: 400;
  }

  &[data-invalid="true"] {
    border-color: ${COLORS["primary"]};
    background-color: ${COLORS["lightRed"]};
    color: ${COLORS["primary"]};
    &::placeholder {
      color: inherit;
    }
    &:focus {
      outline-color: ${COLORS["primary"]};
    }
  }
`;

const Wrapper = styled.div`
  background-color: ${COLORS["white"]};
  width: 900px;
  max-width: 100%;
  height: 65%;
  border-radius: 35px;
  display: flex;
  overflow: hidden;
  padding: 20px;

  & > * {
    font-family: "Roboto", sans-serif;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-basis: 50%;
  margin-left: -20px;
`;

const ImageDesktop = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  overflow: hidden;
`;

const LetterWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px 40px;
  justify-content: space-evenly;
  flex-basis: 50%;
`;

const Header = styled.h1`
  font-size: ${55 / 16}rem;
  color: ${COLORS["darkSlateGray"]};
  font-weight: 700;
`;

const Body = styled.p`
  font-size: ${16 / 16}rem;
  font-weight: 400;
`;

const BenefitWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    padding-bottom: 10px;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export default Newsletter;
