import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    //BEM naming convention
    <div className="App">
      
      {/* Header */}
        <Header/>

      {/* App body */}
        {/* side bar */}
        <Sidebar/>
        {/* feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
