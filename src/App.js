// src/App.js

import React from 'react';
import FileUpload from './FileUpload';
import './FileUpload.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload Example</h1>
      </header>
      <main>
        <FileUpload />
      </main>
    </div>
  );
}

export default App;
