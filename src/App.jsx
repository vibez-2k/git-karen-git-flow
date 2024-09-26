import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg">
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <Sidebar />
          <Feed />
        </div>
      </Container>
    </div>
  );
}

export default App;
