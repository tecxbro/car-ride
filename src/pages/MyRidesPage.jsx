import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white py-4 px-4 flex justify-center">
        <h1 className="text-2xl font-bold text-green-500">Hoppin</h1>
      </div>

      {/* Search Input */}
      <div className="px-4 py-4">
        <div className="bg-gray-200 rounded-full flex items-center justify-between px-4 py-2">
          <Link to="/search" className="flex-grow py-3 flex items-center">
            <img src="https://img.icons8.com/ios/25/000000/search--v1.png" alt="Search" className="h-4 w-4 mr-1" />
            <span className="text-gray-500">Where to?</span>
          </Link>
          <div className="bg-white rounded-full flex items-center justify-center px-4 py-2">
            <button className="flex items-center">
              <img src="https://img.icons8.com/ios/25/000000/clock.png" alt="Clock" className="h-4 w-4 mr-1" />
            Now
            <img src="https://img.icons8.com/ios/20/000000/sort-down.png" alt="Dropdown" className="h-3 w-3 ml-1" />
          </button>
        </div>
      </div>

      {/* Recent Locations */}
      <div className="px-4">
        <div className="flex items-center py-2 border-b border-gray-200">
          <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center mr-2">
            <span className="text-gray-600">L</span>
          </div>
          <div className="flex-grow">
            <p className="text-gray-800">Some Rd</p>
            <p className="text-gray-500 text-sm">Austin, TX</p>
          </div>
        </div>
        <div className="flex items-center py-2">
          <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center mr-2">
            <span className="text-gray-600">L</span>
          </div>
          <div className="flex-grow">
            <p className="text-gray-800">Some St</p>
            <p className="text-gray-500 text-sm">Austin, TX</p>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-semibold mb-2">Suggestions</h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center bg-blue-100 rounded-lg p-2 w-24">
            <img src="https://img.icons8.com/ios/50/000000/car--v1.png" alt="Ride" className="h-8 w-8" />
            <span className="text-sm">Ride</span>
          </div>
          <div className="flex flex-col items-center bg-green-100 rounded-lg p-2 w-24">
            <img src="https://img.icons8.com/ios/50/000000/scooter.png" alt="2-Wheels" className="h-8 w-8" />
            <span className="text-sm">2-Wheels</span>
          </div>
          <div className="flex flex-col items-center bg-yellow-100 rounded-lg p-2 w-24">
            <img src="https://img.icons8.com/ios/50/000000/calendar.png" alt="Reserve" className="h-8 w-8" />
            <span className="text-sm">Reserve</span>
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="px-4 py-4">
        <div className="bg-red-800 text-white rounded-lg p-4">
          <h3 className="font-semibold">50% off your next 5 rides.</h3>
          <p>Redeem now</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white py-4 px-4 border-t border-gray-200 mt-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center">
            <img src="https://img.icons8.com/ios-filled/25/000000/home.png" alt="Home" className="h-6 w-6" />
            <span className="text-sm">Home</span>
          </Link>
          <Link to="/activity" className="flex flex-col items-center">
            <img src="https://img.icons8.com/ios-filled/25/000000/activity-feed.png" alt="Activity" className="h-6 w-6" />
            <span className="text-sm">Activity</span>
          </Link>
          <Link to="/account" className="flex flex-col items-center">
            <img src="https://img.icons8.com/ios-filled/25/000000/user.png" alt="Account" className="h-6 w-6" />
            <span className="text-sm">Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
