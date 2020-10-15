import React from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    //BEM naming convention
    <div className="App">
      <h2>Hello World</h2>
      {/* Header */}
        <Header/>

      {/* App body */}
        {/* side bar */}
        {/* feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
