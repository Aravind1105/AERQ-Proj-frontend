import { ResultResponse } from "../components/StartGame/result.interface";
import { get } from "../libs/get";
import { urlBuilder } from "./urlBuilder";

export const gameResult = async (
  firstValue: string,
  secondValue: string
): Promise<ResultResponse> => {
  const url: string = new urlBuilder()
    .path("api/getResult")
    .param("play1", firstValue)
    .param("play2", secondValue)
    .build();

  try {
    const response: ResultResponse = await get(url);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
