import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StateBasic from './components/StateBasic';
import PropsPractice from './components/PropsPractice';
import Forms from './components/Forms';
import React16Component from './components/React16Component';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/react-16" Component={React16Component} /> {/* Deprecated exact */}
          <Route path="/state-basic" element={<StateBasic />} />  {/* changes in React Router v6 */}
          <Route path="/" element={<StateBasic />} />
          <Route path="/props-basic" element={<PropsPractice />} val="Hello from Route" className="custom-class" />
          <Route exact path="/forms" Component={Forms} /> {/* Deprecated exact */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
