import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Paths, Variables } from "../constants";
import StartGame from "../components/StartGame";
import App from "../App";

const renderComponent = ({ type }) =>
  render(
    <MemoryRouter initialEntries={[`${Paths.GAME_START}/${type}`]}>
      <Routes>
        <Route
          path={`${Paths.GAME_START}/:type`}
          element={<StartGame />}
        ></Route>
      </Routes>
    </MemoryRouter>
  );

describe("Game - test cases", () => {
  test("Chose Game type", () => {
    render(<App />);
    const playvscomp = screen.getByRole("button", {
      name: /Player vs Computer/i,
    });
    const compvsplay = screen.getByRole("button", {
      name: /Computer vs Computer/i,
    });
    expect(playvscomp).toBeInTheDocument();
    expect(compvsplay).toBeInTheDocument();
  });

  test("Player vs Comp", () => {
    renderComponent({ type: Variables.PLAYER_VS_COMP.type });

    const submitBtn = screen.getByText(/Fetch Result/i);
    expect(submitBtn).toBeDisabled();

    fireEvent.click(screen.getByTestId(/firstValue-PAPER/i));

    expect(screen.getByTestId("firstValue").innerHTML).toContain("PAPER");

    expect(submitBtn).not.toBeDisabled();
  });

  test("Comp vs Comp", async () => {
    renderComponent({ type: Variables.COMP_VS_COMP.type });

    const submitBtn = screen.getByText(/Start Game/i);
    expect(submitBtn).not.toBeDisabled();

    fireEvent.click(submitBtn);

    expect(screen.getByText(/Fetch Result/i));
    fireEvent.click(submitBtn);
  });
});
