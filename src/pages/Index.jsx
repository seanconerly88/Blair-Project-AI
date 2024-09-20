import React from 'react';
import TopTenList from '../components/TopTenList';
import SocialMediaTracker from '../components/SocialMediaTracker';
import AskBlair from '../components/AskBlair';

const Index = () => {
  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">Blair AI Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">My List</h2>
          <div className="flex-grow">
            <TopTenList />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Social Radar</h2>
          <div className="h-[350px]"> {/* Adjusted height */}
            <SocialMediaTracker />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Ask Blair</h2>
        <AskBlair />
      </div>
    </div>
  );
};

export default Index;
