import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
    </Routes>
  );
};

export default App;
