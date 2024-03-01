import React from "react";

// interfaces
import { ITask } from "../../interfaces/Task";

// CSS
import "./TaskList.css";

// Icons
import { FaPencilAlt } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className="task">
            <div className="details">
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className="actions">
              <FaPencilAlt className="icon" onClick={handleEdit} />
              <CiTrash
                className="icon"
                onClick={() => {
                  handleDelete(task.id);
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
