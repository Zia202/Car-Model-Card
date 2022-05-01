import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
        <form action="/action.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" value="Mike"><br><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" value="Walker"><br><br>
  <input type="submit" value="Submit">
</form>
      </header>
    </div>
  );
}

export default App;
