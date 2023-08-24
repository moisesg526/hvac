import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Pitch from './components/Pitch';
import Whyus from './components/Whyus';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
      <Pitch />
      <Whyus />
      <Footer />
    </div>
  );
}

export default App;
