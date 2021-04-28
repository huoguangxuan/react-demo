import './App.css';
import {Route,Switch} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
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
            {/* 这样也能匹配到home */}
            {/* <MyNavLink to='/home/a/b'>home</MyNavLink> <br/><br/> */}
            
            
            <MyNavLink to='/home/a/b'>home</MyNavLink> <br/><br/>
            <MyNavLink to='/about'>about</MyNavLink>
          
          </div>
          <div style={{flex:1,backgroundColor:'lightcoral',height:'100%'}}>
              {/* <Route path="/home" component={Home}></Route>
              <Route path="/home" component={Test}></Route>
              <Route path="/about" component={About}></Route> */}
              {/* 应用Switch 单一匹配的效率问题*/} 
              
              {/* 严格匹配 exact={true}*/}
              <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
              </Switch>
          </div>
        </div>
    </div>
  );
}

export default App;
