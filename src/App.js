import React from 'react';
import PhotoCard from "./components/PhotoCard";
import HeaderBar from "./components/HeaderBar";
import './App.css';

function App() {
  return (
    <div key="page-body">
      <HeaderBar />
      <PhotoCard />
    </div>
  );
}

export default App;
