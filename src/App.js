// Learn React: https://reactjs.org"
import Header from './components/Header';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {useEffect} from "react"

//put all the components together in one page
const App = () => {
  return (
    <div >
      <Header />
      <List />
    </div>
  );
}

export default App;
