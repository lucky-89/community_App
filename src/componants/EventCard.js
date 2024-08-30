// /components/EventCard.js
import React from 'react';


function EventCard({ event }) {
  return (
    <div className="eventCard">
      <h4>{event.title}</h4>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <button>Join Event</button>
    </div>
  );
}

export default EventCard;
