import './App.css';
import Hook from './components/Hook';
import Objecto from './components/Objecto';
import Saludar from './components/Saludar';

function App() {

  const userName = 'Juan Daniel Suarez';
  const edad = 26;

  const user={
    nombre: 'Juan Daniel Suarez',
    edad:26,
    ciudad:"Bogota",
    profesion:"Ingeniero de sistemas"
  }

  // enviar funciones
  const saludarFn =(name)=>{
    alert("Hola como esta " + name );
    alert(`Hola como esta ${name}` );
}

  return (
    <div className="App">
      <Saludar
        name={userName}
        edad={edad}
      />
      <Saludar
        name="kisama"
        edad="12"
      />

      <Objecto
        user={user}
        saludarFn={saludarFn}
      />

      <Hook />
    </div>
  );
}

export default App;
