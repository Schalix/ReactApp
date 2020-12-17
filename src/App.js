import logo from './logo.svg';
import './App.css';
// import List from './components/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World !!</h1>
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
      </header>
    </div>
  );
}

//put this back to  list.js
const List = () => {

    const fetchData = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character/")
        const data = await response.json()
        // setData(data)
        return data
      // console.log('data', data)
    }
}


export default App;
