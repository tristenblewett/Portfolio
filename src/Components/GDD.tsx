import React from "react";
import { styled } from "styled-components";
import { GameDesignDocument } from "../types";
import { Column } from "../Styles/StyledComponents";

/* ---------- Styled Components ---------- */

const GDDContainer = styled(Column)`
  margin-top: 3rem;
  gap: 2rem;
`;

const GDDCard = styled(Column)`
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.25);
  border: 1px solid rgba(0, 255, 255, 0.25);
`;

const GDDTitle = styled.h1`
  font-family: "ZenDots", sans-serif;
  font-size: 2rem;
  color: #00ced1;
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GDDDescription = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PDFFrame = styled.iframe`
  width: 100%;
  height: 500px;
  border: 2px solid rgba(0, 255, 255, 0.2);
  border-radius: 12px;
  background-color: #111;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const ViewLink = styled.a`
  color: #00ffff;
  font-weight: bold;
  text-decoration: none;
  margin-top: 0.75rem;
  align-self: flex-end;
  transition: color 0.2s ease;

  &:hover {
    color: #00ced1;
  }
`;

interface GDDProps {
    docs: GameDesignDocument[];
}

const GDD: React.FC<GDDProps> = ({ docs }) => {
  return (
    <GDDContainer>
      <h2
        style={{
          color: "#00ffff",
          fontFamily: "ZenDots, sans-serif",
          fontSize: "2rem",
        }}
      >
        Game Design Documents
      </h2>

      {docs.map((doc, index) => (
        <GDDCard key={index}>
          <GDDTitle>{doc.title}</GDDTitle>
          <GDDDescription>{doc.description}</GDDDescription>

          <PDFFrame src={doc.file} title={doc.title} />

          <ViewLink href={doc.file} target="_blank" rel="noopener noreferrer">
            🔗 View Full PDF
          </ViewLink>
        </GDDCard>
      ))}
    </GDDContainer>
  );
};

export default GDD;