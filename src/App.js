import {logo} from './logo.svg';
//import logo from '../build/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={{logo}} className="App-logo" alt="logo" />
        <p>
          Teste de Manipulação da Ferramenta React PASSO A PASSO
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
