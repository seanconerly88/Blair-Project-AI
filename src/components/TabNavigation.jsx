import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopTenList from './TopTenList';
import SocialMediaTracker from './SocialMediaTracker';
import AskBlair from './AskBlair';
import CoachConnect from './CoachConnect';

const TabNavigation = () => {
  return (
    <Tabs defaultValue="top-ten" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="top-ten">My List</TabsTrigger>
        <TabsTrigger value="social-radar">Social Radar</TabsTrigger>
        <TabsTrigger value="ask-blair">Ask Blair</TabsTrigger>
        <TabsTrigger value="coach-connect">Coach Connect</TabsTrigger>
      </TabsList>
      <TabsContent value="top-ten">
        <TopTenList />
      </TabsContent>
      <TabsContent value="social-radar">
        <SocialMediaTracker />
      </TabsContent>
      <TabsContent value="ask-blair">
        <AskBlair />
      </TabsContent>
      <TabsContent value="coach-connect">
        <CoachConnect />
      </TabsContent>
    </Tabs>
  );
};

export default TabNavigation;