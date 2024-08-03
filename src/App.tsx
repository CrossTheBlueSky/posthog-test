import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;