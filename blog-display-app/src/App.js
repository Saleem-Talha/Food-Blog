
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';
import Title from './Title';

function App() {
  return (

    <Router>
      <div className="container mx-auto p-4">
        <Title></Title>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
