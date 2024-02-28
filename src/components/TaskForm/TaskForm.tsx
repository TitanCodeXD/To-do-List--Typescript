// CSS
import "./TaskForm.css";

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className="form">
      <div className="input_container">
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da Tarefa"></input>
      </div>
      <div className="input_container">
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da Tarefa"
        ></input>
      </div>
      <input type="submit" value={btnText}></input>
    </form>
  );
};

export default TaskForm;
