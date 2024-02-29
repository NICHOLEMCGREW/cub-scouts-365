import React from 'react';

const eventsData = [
  {
    id: 1,
    title: 'Camping Trip',
    date: 'April 15, 2024',
    imageUrl: 'url_to_image1.jpg',
  },
  {
    id: 2,
    title: 'Pinewood Derby',
    date: 'May 5, 2024',
    imageUrl: 'url_to_image2.jpg',
  },
  // Add more events as needed
];

const Events = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Top Cub Scouts Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map(event => (
          <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover mb-4" />
            <div>
              <h3 className="text-lg font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
