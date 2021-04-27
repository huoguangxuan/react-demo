import './App.css';
import {Link,BrowserRouter,Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
/**
 * Router 两种
 * 1：BrowserRouter
 * 2:HashRouter
 */
// import Counter from './components/1_setState'
function App() {
  return (
    <div className="App">
        <h1>Router demo</h1>
        <hr></hr>
        <div style={{display:'flex'}}>
          <div style={{width:'100px'}}>
            <Link to='/home'>home</Link> <br/><br/>
            <Link to='/about'>about</Link>
          
          </div>
          <div style={{flex:1,backgroundColor:'lightcoral',height:'100%'}}>
              <Route path="/home" component={Home}></Route>
              <Route path="/about" component={About}></Route>
          </div>
        </div>
    </div>
  );
}

export default App;
