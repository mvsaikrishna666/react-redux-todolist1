import './App.css';
import Additem from './Components/Additem'
import List from './Components/List'
import Donelist from './Components/Donelist'
function App() {
  return (
    <div className="App">
      <Additem/>
      <List/>
      Done list
      <Donelist/>
    </div>
  );
}

export default App;
