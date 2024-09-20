import React from 'react';
import TopTenList from '../components/TopTenList';
import SocialMediaTracker from '../components/SocialMediaTracker';
import SchoolNotes from '../components/SchoolNotes';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">College Football Recruiting Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Top 10 Schools</h2>
          <TopTenList />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Social Media Tracker</h2>
          <SocialMediaTracker />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">School Notes</h2>
        <SchoolNotes />
      </div>
    </div>
  );
};

export default Index;
