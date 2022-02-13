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
import { Options, Types } from "../../constants";
import { gameResult } from "../../services/query";
import { ResultResponse } from "./result.interface";

type GameParams = {
  type: string;
};

const StartGame: FC = () => {
  const { type } = useParams<GameParams>();
  const [isCompPlay] = useState<boolean>(
    Types.COMP_VS_COMP === type ? true : false
  );
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isCompPlay && firstValue && !secondValue) {
      autoGenerate(firstValue, secondValue);
    }
  }, [firstValue, isCompPlay, secondValue]);

  const autoGenerate = (val1: string, val2: string) => {
    if (!val1) {
      const idx = Math.floor(Math.random() * Object.values(Options).length);
      setFirstValue(Options[Object.keys(Options)[idx]]);
    }
    if (!val2) {
      const idx = Math.floor(Math.random() * Object.values(Options).length);
      setSecondValue(Options[Object.keys(Options)[idx]]);
    }
  };

  const startGame = () => {
    autoGenerate(firstValue, secondValue);
  };

  const fetchResult = async () => {
    setIsLoading(true);
    const response: ResultResponse = await gameResult(firstValue, secondValue);
    if (!response) {
      console.log(response);
    }
  };

  return (
    <Fragment>
      <Container>
        <Card>
          <Header>{isCompPlay ? "Computer" : "Player"}</Header>
          <Text>
            {isCompPlay
              ? firstValue
                ? `Selected Choice: ${firstValue}`
                : "Choice will be auto selected"
              : firstValue
              ? `Selected Choice: ${firstValue}`
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
                    !firstValue &&
                    setFirstValue((e.target as Element).id)
                  }
                  style={{ opacity: isCompPlay || firstValue ? "0.2" : "1" }}
                >
                  {val}
                </OptionsCard>
              );
            })}
          </CardContainer>
        </Card>
        <Card>
          <Header>{"Computer"}</Header>
          <Text>
            {secondValue
              ? `Selected Choice: ${secondValue}`
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
        <Button onClick={firstValue && secondValue ? fetchResult : startGame}>
          {firstValue && secondValue ? "Fetch Result" : "Start Game"}
        </Button>
      ) : (
        <Button disabled={!firstValue || !secondValue} onClick={fetchResult}>
          Fetch Result
        </Button>
      )}
    </Fragment>
  );
};

export default StartGame;
