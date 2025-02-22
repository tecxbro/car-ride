import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function BookingConfirmationPage({ selectedRide }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!selectedRide) {
    return <div className="p-4">No ride selected. Please go back to the search page.</div>;
  }

  const handleConfirmBooking = () => {
    alert('Booking Confirmed!');
    navigate('/');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Confirmation</h1>
      <p>
        <b>Driver:</b> {selectedRide.driverName}
      </p>
      <p>
        <b>Departure Time:</b> {selectedRide.departureTime}
      </p>
      <p>
        <b>Car Model:</b> {selectedRide.carModel}
      </p>
      <p>
        <b>Price:</b> ${selectedRide.price}
      </p>
      <p>
        <b>Rider:</b> {user?.name}
      </p>
      <p className="mt-4">Payment will be charged 24 hours before the ride.</p>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleConfirmBooking}
      >
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingConfirmationPage;
