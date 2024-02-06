import logo from './logo.svg';
import './App.css';
import Motion, {SpringMotion} from "./components/motion"
import TransitionMotionDemo, {TransitionSpring} from "./components/TransitionMotion"

function App() {
  return (
    <div>
        <p>Motion - react motion</p>
         <Motion/>
        <p>Motion - react spring</p>
         <SpringMotion/>
        <p>Transition - react motion</p>
        <TransitionMotionDemo/>
        <p>Transition - react spring</p>
        <TransitionSpring/>
        <div style={{marginBottom:"50px"}}/>
    </div>
  );
}

export default App;
