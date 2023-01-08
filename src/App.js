import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './login';
import Home from './home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
