// /components/EventList.js
import React from 'react';
import EventCard from './EventCard';


function EventList({ events }) {
  return (
    <div className="eventList">
      {events.length > 0 ? (
        events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))
      ) : (
        <p>No upcoming events.</p>
      )}
    </div>
  );
}

export default EventList;
