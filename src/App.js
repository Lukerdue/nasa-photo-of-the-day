import React from "react";
import "./App.css";
import MainContent from './components/main/main-content';
import Header from './components/header/header'


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent/>
    </div>
  );
}

export default App;
