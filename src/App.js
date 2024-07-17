import './App.css';
import { Contexto } from './components/Contexto';
import Theme from "./components/Theme";

function App() {
  return (
    <div className='App'>
        <Contexto>
          <Theme />
        </Contexto>
    </div>
  );
}

export default App;
