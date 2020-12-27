// Learn React: https://reactjs.org"


import logo from './logo.svg';
import './App.css';
import List from './components/list'
// import {useEffect} from "react"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <List />
    </div>
    
  );
}

export default App;
