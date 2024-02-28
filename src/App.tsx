// CSS
import "./App.css";

//Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="main">
          <div>
            <h2>O que você vai fazer?</h2>
            <p>Formulário</p>
          </div>
          <div>
            <h2>Suas tarefas:</h2>
            <p>Lista</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
