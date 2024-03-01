// React
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// CSS
import "./TaskForm.css";

// Interface
import { ITask } from "../../interfaces/Task.ts";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
};

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className="form">
      <div className="input_container">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Título da Tarefa"
          onChange={handleChange}
        ></input>
      </div>
      <div className="input_container">
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          min="0"
          max="10"
          name="difficulty"
          value={difficulty}
          placeholder="Dificuldade da Tarefa"
          onChange={handleChange}
        ></input>
      </div>
      <input type="submit" value={btnText}></input>
    </form>
  );
};

export default TaskForm;
