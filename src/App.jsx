import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Jogar futebol",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Pessoal",
      isCompleted: true,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todo.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
