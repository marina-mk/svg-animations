import './App.css';
import { Groups } from './components/Groups';
import { KeyFramesAnimation } from './components/keyFramesAnimation/KeyFramesAnimation';
import { PathShapes } from './components/PathShapes';
import { PlatonicShapes } from './components/PlatonicShapes';
import { TransitionAnimation } from './components/transitionAnimation/TransitionAnimation';


function App() {
  return (
    <div className="App">
        <PlatonicShapes />
        <PathShapes />
        <Groups />
        <KeyFramesAnimation />
        <TransitionAnimation />
    </div>
  );
}

export default App;
