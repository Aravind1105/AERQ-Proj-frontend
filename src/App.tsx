import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { Paths } from "./constants";
import "./App.css";
import GameType from "./components/GameType";
import StartGame from "./components/StartGame";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.GAME_TYPE} element={<GameType />} />
        <Route path={`${Paths.GAME_START}/:type`} element={<StartGame />} />
        <Route path="*" element={<Navigate to={Paths.GAME_TYPE} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
