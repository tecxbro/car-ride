import React, { useState, useEffect } from 'react';
import RideCard from '../components/RideCard';
import { useNavigate } from 'react-router-dom';

const mockRides = [
  { id: 1, driverName: 'John Doe', departureTime: '8:00 AM', carModel: 'Toyota Camry', price: 15 },
  { id: 2, driverName: 'Jane Smith', departureTime: '9:00 AM', carModel: 'Honda Civic', price: 12 },
  { id: 3, driverName: 'David Lee', departureTime: '10:00 AM', carModel: 'Nissan Altima', price: 18 },
];

function SearchPage({ setSelectedRide }) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [rides, setRides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real application, you would fetch rides from an API based on the search criteria.
    // For now, we'll use mock data.
    setRides(mockRides);
  }, []);

  const handleSearch = () => {
    // In a real application, you would filter the rides based on the pickup and dropoff locations.
    // For now, we'll just use the mock data.
    if (!pickupLocation || !dropoffLocation) {
      alert('Please enter both pickup and dropoff locations.');
      return;
    }
  };

  const handleBookRide = (ride) => {
    setSelectedRide(ride);
    navigate('/booking-confirmation');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search for a Ride</h1>
      <div className="mb-4">
        <label htmlFor="pickup" className="block text-gray-700 text-sm font-bold mb-2">
          Pickup Location:
        </label>
        <input
          type="text"
          id="pickup"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter pickup location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dropoff" className="block text-gray-700 text-sm font-bold mb-2">
          Drop-off Location:
        </label>
        <input
          type="text"
          id="dropoff"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter drop-off location"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="mt-8">
        {rides.length > 0 ? (
          rides.map((ride) => (
            <RideCard key={ride.id} ride={ride} onBookRide={handleBookRide} />
          ))
        ) : (
          <p>No rides found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
