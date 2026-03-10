import { useState } from "react";
import Header from "./components/commons/Header";
import TodoListPage from "./pages/TodoListPage";
import { Route, Routes } from "react-router-dom";
import TodoRegistPage from "./pages/TodoRegistPage";
import TodoInfoPage from "./pages/TodoInfoPage";
import Sensor from "./components/rasp/Sensor";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/regist" element={<TodoRegistPage />} />
        <Route path="/info/:todoNo" element={<TodoInfoPage />} />
        <Route path="/sensor" element={<Sensor />} />
      </Routes>
    </div>
  );
}

export default App;
