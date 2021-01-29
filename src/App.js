
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Memes from './components/Memes'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'




function App() {
  const [data, setData] = useState({});
// arrow is what i want to do
// square bracketrs control when you do it (empty means on page load)
  useEffect(() => {axios.get('/api')
  .then((resp) => {
    console.log(resp.data)
    setData(resp.data)
  })}, []);

  
async function getValue () {
  const resp = await axios.get ('/api/counter')
  setData(resp.data);

}
async function incValue () {
  const resp = await axios.post ('/api/counter')
  setData(resp.data)
  
}
async function decValue () {
  const resp = await axios.put ('/api/counter')
  setData(resp.data)
  
}
async function delValue () {
  const resp = await axios.delete ('/api/counter')
  setData(resp.data)
  
}
  
  
  return (
    <Router>
    <div>

    <header className="links">
      <Link to='/'>Home</Link>
      <Link to='/memes'>Memes</Link>
      <Link to='/about'>About</Link>
    </header>
    <Switch>
        <Route path='/'exact>
        <Home data={data}/>
        <p>data is: {data.value}</p>
        <button className = 'btn' onClick={getValue}>get</button>
        <button className = 'btn' onClick={incValue}>inc</button>
        <button className = 'btn' onClick={decValue}>dec</button>
        <button className = 'btn' onClick={delValue}>del</button>
        </Route>
        <Route path='/memes'>
        <Memes />
        </Route>
        <Route path='/about'>
        <About />
        </Route>

        
    </Switch>
    
    
 

    </div>
    </Router>
  );
}

export default App;
