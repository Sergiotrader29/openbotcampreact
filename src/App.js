import logo from './logo.svg';
import './App.css';
//import TaskListComponent from './componentes/containers/task_list';
import ContactoCompleto from './componentes/containers/contacto_completo';
//import ContactoProps from './componentes/pure/contacto_props';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ContactoCompleto></ContactoCompleto>
        
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
