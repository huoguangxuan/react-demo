import './App.css';
import Counter from './container/Count'
import store from './store'
function App() {
  return (
    <div className="App">
      <Counter store={store}></Counter>
    </div>
  );
}

export default App;
