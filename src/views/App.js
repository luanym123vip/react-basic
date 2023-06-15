import logo from './logo.svg';
import './App.scss';
import './Examples/MyComponent';
import MyComponent from './Examples/MyComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;