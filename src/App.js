import './App.css';
import Home from './views/Home';
import About from './views/About';
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route element={<Home/>} path='/indie-project/'/>
        <Route element={<About/>} path='/indie-project/about' />
      </Routes>
    </div>
  );
}

export default App;
