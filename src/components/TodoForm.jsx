import React from "react";

const TodoForm = () => {
  return (
    <div>
      <h2>Criar Tarefa:</h2>
      <form>
        <input type="text" placeholder="Digite o título" />
        <select>
          <option value="">Selecione uma categoria</option>
          <option value="Dieta">Dieta</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Treino">Treino</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button>Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
