import React from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import TaskList from "./features/task/TaskList";
import TaskInput from "./features/task/TaskInput";
import Featch from "./features/featch/Featch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TaskInput />
        <TaskList />
        <Featch />
      </header>
    </div>
  );
}

export default App;
