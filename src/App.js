import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" elemtn={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
