import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

function MyRidesPage() {
  const location = useLocation();
  const mockRides = [
    {
      id: 1,
      date: '2023-05-20',
      driver: 'John Doe',
      from: 'Downtown',
      to: 'Airport',
      status: 'Completed'
    },
    {
      id: 2,
      date: '2023-05-25',
      driver: 'Jane Smith',
      from: 'University',
      to: 'Mall',
      status: 'Upcoming'
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-white py-4 px-4 flex justify-center">
        <h1 className="text-2xl font-bold text-green-500">My Rides</h1>
      </div>

      <div className="px-4 py-4 flex-grow">
        {mockRides.map(ride => (
          <div key={ride.id} className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{ride.date}</span>
              <span className={`px-2 py-1 rounded ${
                ride.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {ride.status}
              </span>
            </div>
            <div className="space-y-2">
              <p><span className="font-medium">Driver:</span> {ride.driver}</p>
              <p><span className="font-medium">From:</span> {ride.from}</p>
              <p><span className="font-medium">To:</span> {ride.to}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white py-4 px-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center" style={{ color: location.pathname === '/' ? 'black' : 'gray' }}>
            <FontAwesomeIcon icon={faHome} className="h-6 w-6" />
            <span className="text-sm">Home</span>
          </Link>
          <Link to="/activity" className="flex flex-col items-center" style={{ color: location.pathname === '/activity' ? 'black' : 'gray' }}>
            <FontAwesomeIcon icon={faClock} className="h-6 w-6" />
            <span className="text-sm">Activity</span>
          </Link>
          <Link to="/account" className="flex flex-col items-center" style={{ color: location.pathname === '/account' ? 'black' : 'gray' }}>
            <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
            <span className="text-sm">Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyRidesPage;
