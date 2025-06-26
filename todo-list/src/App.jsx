import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Task from './components/Task';
import About from './components/About';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Task />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
