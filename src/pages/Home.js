// /pages/Home.js
import React, { useState } from 'react';
import Sidebar from '../componants/Slidebar';
import Feed from '../componants/Feed';
import Widgets from '../componants/Widgets';
import '../App.css';

function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="home">
      <button className="sidebarToggle" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
        ☰
      </button>
      {isSidebarVisible && <Sidebar />}
      <Feed />
      <Widgets />
    </div>
  );
}

export default Home;
