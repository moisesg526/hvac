import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Pitch from './components/Pitch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
      <Pitch />
    </div>
  );
}

export default App;
