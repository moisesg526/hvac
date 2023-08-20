import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Pitch from './components/Pitch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
      <Pitch />
      <Footer />
    </div>
  );
}

export default App;
