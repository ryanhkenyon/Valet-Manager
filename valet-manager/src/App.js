// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Valet Manager</h1>
        <h3>Login</h3>
        <div className="App-login">
        <form>
        <label>Username</label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <input type="submit"></input>
        </form>
        <p>Don't have an account?</p>
        <button >Register here!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
