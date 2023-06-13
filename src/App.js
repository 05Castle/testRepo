import "./App.css";
import Board from "./components/Board";

const App = () => {
  return (
    <div className="game">
      <span className="title">Tic Tac Toe</span>
      <Board />
    </div>
  );
};

export default App;
