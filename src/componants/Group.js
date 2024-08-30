// /components/Group.js
import React, { useState } from 'react';
import EventList from './EventList';
import CreateEvent from './CreateEvent';


function Group({ group }) {
  const [events, setEvents] = useState(group.events);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="group">
      <div className="group__header">
        <h2>{group.name}</h2>
        <p>{group.description}</p>
      </div>

      <div className="group__content">
        <CreateEvent addEvent={addEvent} />
        <h3>Upcoming Events</h3>
        <EventList events={events} />
      </div>
    </div>
  );
}

export default Group;
