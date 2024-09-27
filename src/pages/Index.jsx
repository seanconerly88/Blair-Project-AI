import React from 'react';
import TabNavigation from '../components/TabNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">Blair AI Dashboard</h1>
      <TabNavigation />
    </div>
  );
};

export default Index;