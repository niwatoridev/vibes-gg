import './App.css'
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          {/* <Route path='portfolio' element={<Portfolio />} /> */}
        </Routes>
    </div>
  );
}

export default App;
