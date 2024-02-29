// React
import { useState } from "react";

// CSS
import "./App.css";

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

// Interface
import { ITask } from "./interfaces/Task.ts";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <>
      <div>
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
            <TaskList taskList={taskList} handleDelete={deleteTask} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
