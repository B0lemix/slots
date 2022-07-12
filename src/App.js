import logo from './logo.svg';
import './App.css';
import Slot from './components/Slot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's go!
        </p>
          <Slot />
      </header>
    </div>
  );
}

export default App;
