  import React from 'react';
  import { YearlyEventsData } from './index';
  import { Link } from 'react-scroll';
  
  const Events = () => {
      return (
        <section id="events" className="events events-content text-center min-h-screen m-20">
          <div className="title mb-6">
            <h1 className="text-[#003f87] text-4xl font-bold mb-4 mt-5">Events</h1>
            <div className="line mb-7 w-16 border-t-4 border-yellow-400 mx-auto"></div>
          </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {YearlyEventsData.map((event, index) => (
              <EventCard event={event} key={index} />
            ))}
          </div>
        </section>
      );
    };
    
  
    const EventCard = ({ event }) => (
        <div className="event shadow-md p-3 rounded-md bg-gray-100 w-[400px]">
          <img src={event.image} alt={event.title} className="w-full h-32 object-cover rounded-t-md mb-2" />
          <div className="p-2">
            <h4 className="text-lg font-bold mb-1">{event.title}</h4>
            <p className="mb-2 text-sm text-gray-600">{event.description}</p>
            <p className="text-xs text-gray-700">
              <strong>Month:</strong> {event.date}
            </p>
            <div className="event-details mt-2">
              {event.infoUrl ? (
                <a
                  href={event.infoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-4 border bg-[#003f87] text-yellow-400 hover:bg-yellow-400 hover:text-blue-800 rounded-full font-semibold text-sm transition duration-300 ease-in-out cursor-pointer"
                >
                  Learn More
                </a>
              ) : null}
            </div>
          </div>
        </div>
      );
      
    
  
  
  export default Events;

