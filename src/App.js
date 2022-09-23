import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics price="1200"></Cosmetics>
      <Shoes price="1500"></Shoes>
    </div>
  );
}

export default App;
