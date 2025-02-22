import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faClockRotateLeft, faHome, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

function ActivityPage() {
  const location = useLocation();
  const pastRides = [
    {
      id: 1,
      mapImage: 'https://via.placeholder.com/300x150', // Replace with actual map image URL
      address: '567 E Peltason Dr',
      date: 'Feb 12 • 10:01 PM',
      price: '$5.39',
    },
    {
      id: 2,
      address: 'Vista del Campo',
      date: 'Feb 12 • 8:29 PM',
      price: '$5.36',
    },
    {
      id: 3,
      address: 'Robert Cohen Theatre UCI Arts',
      date: 'Feb 7 • 7:20 PM',
      price: '$13.39',
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Activity Header */}
      <div className="bg-white py-4 px-4">
        <h1 className="text-2xl font-bold">Past</h1>
      </div>

      {/* Past Rides */}
      <div className="flex-grow overflow-y-auto p-4">
        {pastRides.map((ride) => (
          <div
            key={ride.id}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-4 hover:shadow-lg"
          >
            {ride.mapImage ? (
              <img
                src={ride.mapImage}
                alt="Map"
                className="w-full h-40 object-cover"
              />
            ) : (
              <div className="flex items-center space-x-4 p-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <FontAwesomeIcon icon={faCar} size="3x" color="#4299E1" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="font-semibold text-base">{ride.address}</h2>
                  <p className="text-gray-600 text-sm">{ride.date}</p>
                  <p className="text-gray-800 text-sm">{ride.price}</p>
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded flex items-center text-sm">
                  <FontAwesomeIcon icon={faClockRotateLeft} className="mr-2" />
                  Rebook
                </button>
              </div>
            )}
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

export default ActivityPage;
