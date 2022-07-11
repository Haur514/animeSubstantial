import logo from '../figure/logo.svg';
import '../style/App.css';
import DrawEye from './DrawEye';

function App(props) {
  return (
    <div>
      <DrawEye eyeside="right"/>
      <DrawEye eyeside="left"/>
    </div>
  );
}

export default App;
