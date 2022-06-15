import logo from './logo.svg';
import './App.css';
import TaskListComponent from './componentes/containers/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TaskListComponent></TaskListComponent>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blankbeautify "
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
