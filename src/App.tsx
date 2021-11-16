import './App.css';
import { Groups } from './components/Groups';
import { PathShapes } from './components/PathShapes';
import { PlatonicShapes } from './components/PlatonicShapes';


function App() {
  return (
    <div className="App">
        <PlatonicShapes />
        <PathShapes />
        <Groups />
    </div>
  );
}

export default App;
