import './App.css';
import Saludar from './components/Saludar';

function App() {
  return (
    <div className="App">
      <Saludar
        name="Saitama"
        edad="15"
      />
      <Saludar
        name="kisama"
        edad="12"
      />
    </div>
  );
}

export default App;
