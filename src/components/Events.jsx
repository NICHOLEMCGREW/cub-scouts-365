import React from 'react';
import { YearlyEventsData } from './index';

const EventCard = ({ event }) => (
  <div className="event">
    <img src={event.image} alt={event.title} />
    <h4 className="text-xl font-bold mb-2">{event.title}</h4>
    <p className="mb-4">{event.description}</p>
    <p className="text-sm mb-2"><strong>Month:</strong> {event.date}</p>
    <div className="event-details">
      <a href={event.facebookEventUrl} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  </div>
);

const Events = () => {
  return (
    <section id="events" className="events">
      <div className="title">
        <h1 className="text-3xl font-bold mb-2">Events</h1>
        <div className="line"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {YearlyEventsData.map((event, index) => (
          <EventCard event={event} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Events;
