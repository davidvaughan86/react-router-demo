import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Memes from './components/Memes'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
function App() {
















  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/'exact>
        <Home />
        </Route>
        <Route path='/memes'>
        <Memes />
        </Route>
        <Route path='/about'>
        <About />
        </Route>

        
      </Switch>
    
    <header>
      <Link to='/'>Home</Link>
      <Link to='/memes'>Memes</Link>
      <Link to='/about'>About</Link>
    </header>
 

    </div>
    </Router>
  );
}

export default App;
