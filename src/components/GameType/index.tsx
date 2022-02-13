import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Header, Button } from "./styles";
import { Paths, Variables } from "../../constants";

const GameType: FC = () => {
  const navigate = useNavigate();

  const startGame = (PlayVsComp: boolean) => {
    if (PlayVsComp) {
      navigate(`${Paths.GAME_START}/${Variables.PLAYER_VS_COMP.type}`);
    } else {
      navigate(`${Paths.GAME_START}/${Variables.COMP_VS_COMP.type}`);
    }
  };
  return (
    <Container>
      <Header>Welcome to the Roshambo Game</Header>
      <Button onClick={() => startGame(true)}>Player vs Computer</Button>
      <Button onClick={() => startGame(false)}>Computer vs Computer</Button>
    </Container>
  );
};

export default GameType;
