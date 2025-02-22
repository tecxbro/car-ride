import React from 'react';
import { Link } from 'react-router-dom';

function ActivityPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <h1>Activity Page (Minimal)</h1>
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

export default ActivityPage;
