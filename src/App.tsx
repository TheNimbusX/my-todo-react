import { useState, useEffect } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import TodoList from "./components/TodoList/TodoList";
import "./styles/App.scss";

export default function App() {
  useEffect(() => {});
  useState();

  return (
    <div className="app">
      <h1 className="app-title">туду</h1>
      <ThemeSwitcher />
      <TodoList />
    </div>
  );
}
