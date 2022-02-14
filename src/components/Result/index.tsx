import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Paths, Variables } from "../../constants";

import {
  Modal,
  ModalDialog,
  ModalHeader,
  ModalBody,
  Text,
  Button,
  MainText,
} from "./styles";

type ResultProps = {
  winner: string;
  firstValue: string;
  secondValue: string;
  isCompPlay: boolean;
  onRetry: () => void;
};

const Result: FC<ResultProps> = ({
  winner,
  firstValue,
  secondValue,
  isCompPlay,
  onRetry,
}) => {
  const navigate = useNavigate();

  return (
    <Modal>
      <ModalDialog>
        <ModalHeader>Result</ModalHeader>
        <ModalBody>
          <Text>
            {isCompPlay
              ? Variables.COMP_VS_COMP.players.play1
              : Variables.PLAYER_VS_COMP.players.play1}
            : {firstValue}
          </Text>
          <Text>
            {isCompPlay
              ? Variables.COMP_VS_COMP.players.play2
              : Variables.PLAYER_VS_COMP.players.play2}
            : {secondValue}
          </Text>
          <MainText>
            {winner === "Tied" ? (
              "Match Tied"
            ) : (
              <>
                <b>{winner}</b> is the Winner !!!
              </>
            )}
          </MainText>
          <Button onClick={onRetry}>Retry Game</Button>
          <Button onClick={() => navigate(`${Paths.GAME_TYPE}`)}>
            Main Menu
          </Button>
        </ModalBody>
      </ModalDialog>
    </Modal>
  );
};

export default Result;
