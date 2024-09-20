import React from 'react';
import TopTenList from '../components/TopTenList';
import SocialMediaTracker from '../components/SocialMediaTracker';

const Index = () => {
  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">Blair AI Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Top 10 Schools</h2>
          <TopTenList />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Social Media Tracker</h2>
          <SocialMediaTracker />
        </div>
      </div>
    </div>
  );
};

export default Index;
