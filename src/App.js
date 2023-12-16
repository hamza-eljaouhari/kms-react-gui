import React from 'react';
import './App.css';
import KeyManager from './components/KeyManager';
import './styles.css'; // Import your styles

function App() {
  return (
    <div className="App">
      <header class="bg-blue-500 p-4">
        <nav class="container mx-auto flex justify-between items-center">
            <a href="/" class="text-white text-2xl font-semibold">My App</a>
            <ul class="flex space-x-4">
                <li><a href="/dashboard" class="text-white">Dashboard</a></li>
                <li><a href="/profile" class="text-white">Profile</a></li>
            </ul>
        </nav>
    </header>

      <KeyManager />
    </div>
  );
}

export default App;
