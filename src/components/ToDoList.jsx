import React, { useState, useCallback } from 'react';

const ToDoList = () => {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');

  const adicionarTarefa = useCallback(() => {
    setTarefas((prevTarefas) => [...prevTarefas, tarefa]);
    setTarefa('');
  }, [tarefa]);

  return (
    <div>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
