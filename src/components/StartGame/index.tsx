import React, { FC, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Card,
  Header,
  Text,
  CardContainer,
  OptionsCard,
  Button,
} from "./styles";
import { Options, Variables } from "../../constants";
import { gameResult } from "../../services/query";
import { ResultResponse } from "./result.interface";
import Result from "../Result";
import { GameParams } from "../GameType/type.interface";

type choiceProps = {
  firstValue: string;
  secondValue: string;
};

const StartGame: FC = () => {
  const { type } = useParams<GameParams>();
  const [isCompPlay] = useState<boolean>(
    Variables.COMP_VS_COMP.type === type ? true : false
  );
  const [choices, setChoices] = useState<choiceProps>({
    firstValue: "",
    secondValue: "",
  });
  const [result, setResult] = useState<string>("");

  const autoGenerate = (val1: string, val2: string) => {
    if (!val1) {
      const idx = Math.floor(Math.random() * Object.values(Options).length);
      setChoices((choices) => ({
        ...choices,
        firstValue: Options[Object.keys(Options)[idx]],
      }));
    }
    if (!val2) {
      const idx = Math.floor(Math.random() * Object.values(Options).length);
      setChoices((choices) => ({
        ...choices,
        secondValue: Options[Object.keys(Options)[idx]],
      }));
    }
  };

  useEffect(() => {
    if (!isCompPlay && choices.firstValue && !choices.secondValue) {
      autoGenerate(choices.firstValue, choices.secondValue);
    }
  }, [isCompPlay, choices]);

  const startGame = () => {
    autoGenerate(choices.firstValue, choices.secondValue);
  };

  const onRetry = () => {
    setResult("");
    setChoices({
      firstValue: "",
      secondValue: "",
    });
  };

  const fetchResult = async () => {
    const response: ResultResponse = await gameResult(
      choices.firstValue,
      choices.secondValue
    );
    if (response) {
      if (response.result === "Tied") {
        setResult(response.result);
      } else {
        setResult(
          isCompPlay
            ? Variables.COMP_VS_COMP.players[response.result]
            : Variables.PLAYER_VS_COMP.players[response.result]
        );
      }
    }
  };

  return (
    <Fragment>
      <Container>
        <Card>
          <Header>
            {isCompPlay
              ? Variables.COMP_VS_COMP.players.play1
              : Variables.PLAYER_VS_COMP.players.play1}
          </Header>
          <Text>
            {isCompPlay
              ? choices.firstValue
                ? `Selected Choice: ${choices.firstValue}`
                : "Choice will be auto selected"
              : choices.firstValue
              ? `Selected Choice: ${choices.firstValue}`
              : "Please select your Choice"}
          </Text>
          <CardContainer>
            {Object.keys(Options).map((val, idx) => {
              return (
                <OptionsCard
                  key={idx}
                  id={Options[val]}
                  onClick={(e) =>
                    !isCompPlay &&
                    !choices.firstValue &&
                    setChoices({
                      ...choices,
                      firstValue: (e.target as Element).id,
                    })
                  }
                  style={{
                    opacity: isCompPlay || choices.firstValue ? "0.2" : "1",
                  }}
                >
                  {val}
                </OptionsCard>
              );
            })}
          </CardContainer>
        </Card>
        <Card>
          <Header>
            {isCompPlay
              ? Variables.COMP_VS_COMP.players.play2
              : Variables.PLAYER_VS_COMP.players.play2}
          </Header>
          <Text>
            {choices.secondValue
              ? `Selected Choice: ${choices.secondValue}`
              : "Choice will be auto selected"}
          </Text>
          <CardContainer>
            {Object.keys(Options).map((val, idx) => {
              return (
                <OptionsCard
                  key={idx}
                  id={Options[val]}
                  style={{ opacity: "0.2" }}
                >
                  {val}
                </OptionsCard>
              );
            })}
          </CardContainer>
        </Card>
      </Container>
      {isCompPlay ? (
        <Button
          onClick={
            choices.firstValue && choices.secondValue ? fetchResult : startGame
          }
        >
          {choices.firstValue && choices.secondValue
            ? "Fetch Result"
            : "Start Game"}
        </Button>
      ) : (
        <Button
          disabled={!choices.firstValue || !choices.secondValue}
          onClick={fetchResult}
        >
          Fetch Result
        </Button>
      )}
      {result && (
        <Result
          winner={result}
          firstValue={choices.firstValue}
          secondValue={choices.secondValue}
          onRetry={onRetry}
        />
      )}
    </Fragment>
  );
};

export default StartGame;
