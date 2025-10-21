import React from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

const CenterContainer = styled(Column)`
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const ContactContainer = styled(Column)`
  background-color: #121212;
  border-radius: 10px;
  padding: 40px 60px;
  align-items: center;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 20px 30px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Info = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
  color: #ccc;

  a {
    color: #25d366;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactMe: React.FC = () => {
  return (
    <CenterContainer>
      <ContactContainer>
        <Title>Contact Me</Title>
        <Info>📞 Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></Info>
        <Info>📧 Email: <a href="mailto:youremail@example.com">youremail@example.com</a></Info>
      </ContactContainer>
    </CenterContainer>
  );
};

export default ContactMe;