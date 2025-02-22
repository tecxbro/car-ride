import React from 'react';

function RideCard({ ride, onBookRide }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold">{ride.driverName}</h3>
      <p>Departure Time: {ride.departureTime}</p>
      <p>Car Model: {ride.carModel}</p>
      <p>Price: ${ride.price}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onBookRide(ride)}
      >
        Book Ride
      </button>
    </div>
  );
}

export default RideCard;
