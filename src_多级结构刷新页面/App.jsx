import './App.css';
import {Route,Switch} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Home from './components/Home'
import About from './components/About'
import Test from './components/Test'
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
            <MyNavLink to='/duo/home'>home</MyNavLink> <br/><br/>
            <MyNavLink to='/duo/about'>about</MyNavLink>
          
          </div>
          <div style={{flex:1,backgroundColor:'lightcoral',height:'100%'}}>
              {/* <Route path="/home" component={Home}></Route>
              <Route path="/home" component={Test}></Route>
              <Route path="/about" component={About}></Route> */}
              {/* 应用Switch 单一匹配的效率问题*/} 

              <Switch>
                <Route path="/duo/home" component={Home}></Route>
                <Route path="/duo/home" component={Test}></Route>
                <Route path="/duo/about" component={About}></Route>
              </Switch>
          </div>
        </div>
    </div>
  );
}

export default App;
