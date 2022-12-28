import logo from './logo.svg';
import './App.css';
import Profil from './componment/Profil';

function App() {
  const name="amel";
  const age=30;
  const handleAdd= (x)=> alert (x);
  return (
    <div className="App">
      <Profil nom={name} age={age} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
