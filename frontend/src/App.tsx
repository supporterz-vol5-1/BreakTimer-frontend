import React, {useState} from 'react';
import './App.css';
import Header from './Header'
import Dashboard from './Dashboard'

function App() {
    const [username, setUsername] = useState("")
    return (
        <div>
            <Header />
            <Dashboard />
        </div>
  );
}

export default App;
