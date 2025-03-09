import './App.css'
import Home from './pages/Home';
import ChooseTreat from './pages/ChooseTreat';
import Timer from './pages/Timer'
import Burnt from './pages/Burnt'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="website-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ChooseTreat" element={<ChooseTreat/>}/>
          <Route path="/Timer" element={<Timer/>}/>
          <Route path="/BurntTreat" element={<Burnt/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
