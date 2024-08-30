
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Sidebar() {
  const groups = [
    { id: 1, name: 'React Developers' },
    { id: 2, name: 'JavaScript Enthusiasts' },
    { id: 3, name: 'Frontend Wizards' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Your Groups</h2>
      </div>
      <div className="sidebar__groups">
        {groups.map((group) => (
          <Link key={group.id} to={`/group/${group.id}`} className="sidebar__groupLink">
            {group.name}
          </Link>
        ))}
      </div>
      <div className="sidebar__footer">
        <Link to="/profile" className="sidebar__footerLink">Profile</Link>
        <Link to="/settings" className="sidebar__footerLink">Settings</Link>
      </div>
    </div>
  );
}

export default Sidebar;
