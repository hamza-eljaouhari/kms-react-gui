import React from 'react';
import './App.css';
import KeyManager from './components/KeyManager';
import './styles.css'; // Import your styles

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 p-4">
        <nav className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-white text-2xl font-semibold">Cryptographical Keys Lifecycle Management</a>
        </nav>
    </header>

      <KeyManager />
    </div>
  );
}

export default App;
