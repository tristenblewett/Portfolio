import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Game";
import GDD from "../Components/GDD";
import { games, gameDesignDocs } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 100px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: silver;
  opacity: 0.2;
`;

const MainPage: React.FC = () => (
  <GamesContainer>
    {games.map((game, index) => (
      <React.Fragment key={index}>
        <Game game={game} />
        {index !== games.length - 1 && <Seperator />}
      </React.Fragment>
    ))}

    {/* 🧾 GDD Section */}
    <Seperator />
    <GDD docs={gameDesignDocs} />
  </GamesContainer>
);


export default MainPage;
