// React
import { useState } from "react";

// CSS
import "./App.css";

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Modal from "./components/Modal/Modal.tsx";

// Icons
import { FaCheck } from "react-icons/fa";

// Interface
import { ITask } from "./interfaces/Task.ts";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updateTask: ITask = { id, title, difficulty };

    const updateItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });
    setTaskList(updateItems);

    // Exibe a mensagem de sucesso
    setShowSuccessMessage(true);

    // Fecha o modal após um pequeno intervalo (500 ms)
    setTimeout(() => {
      hideOrShowModal(false);
      // Oculta a mensagem de sucesso após um período de tempo (por exemplo, 2 segundos)
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 500);
    }, 500);
  };

  return (
    <>
      <div>
        <Modal
          children={
            <TaskForm
              btnText="Editar Tarefa"
              taskList={taskList}
              task={taskToUpdate}
              handleUpdate={updateTask}
            />
          }
        />

        <div>
          {showSuccessMessage && (
            <div className="success-message">
              <p>Editado com sucesso!</p>
              <FaCheck className="icon-success" />
            </div>
          )}
        </div>
        <Header />
        <main className="main">
          <div>
            <h2>O que você vai fazer?</h2>
            <TaskForm
              btnText="Adicionar Tarefa"
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>
          <div>
            <h2>Suas tarefas:</h2>
            <TaskList
              taskList={taskList}
              handleDelete={deleteTask}
              handleEdit={editTask}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
