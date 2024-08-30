// /components/Widgets.js
import React from 'react';
import '../App.css';

function Widgets() {
  return (
    <div className="widgets">
      <h2>Trending Discussions</h2>
      <div className="widgets__discussion">Discussion 1</div>
      <div className="widgets__discussion">Discussion 2</div>
      <div className="widgets__discussion">Discussion 3</div>
    </div>
  );
}

export default Widgets;
