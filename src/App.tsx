import React from 'react';
import './App.css';
import ShapesPage from './ShapesPage';
import Header from './components/Header';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Header as={Container}>
        <div>SHAPES</div>
        <div>Logout</div>
      </Header>
      <ShapesPage />
    </div>
  );
}

export default App;
