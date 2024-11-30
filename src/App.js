import './App.css';
import React from 'react';
import Navbar from './component/navbar/myNavbar';
import Slidebar from './component/center/slidebar/Slidebar';
import Content from './component/center/content/Content';

function App() {
  return (
    <>
      <Navbar />
      <div className='content-center'>
      <Slidebar />
      <Content />
      </div>
    </>
  );
}

export default App;
