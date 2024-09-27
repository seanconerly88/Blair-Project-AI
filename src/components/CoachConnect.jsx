import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CoachConnect = () => {
  const [selectedItems, setSelectedItems] = useState({
    transcript: false,
    highlightFilm: false,
    testScores: false,
    classSchedule: false
  });
  const [coachEmail, setCoachEmail] = useState('');

  const handleCheckboxChange = (item) => {
    setSelectedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const handleEmailChange = (e) => {
    setCoachEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would integrate with your AI service to generate the email content
    // and then use the Gmail API to send the email
    // For now, we'll just show a success message
    toast.success("Email sent to coach successfully!");
    // Reset form
    setSelectedItems({
      transcript: false,
      highlightFilm: false,
      testScores: false,
      classSchedule: false
    });
    setCoachEmail('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">Coach Connect</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="transcript" 
              checked={selectedItems.transcript}
              onCheckedChange={() => handleCheckboxChange('transcript')}
            />
            <label htmlFor="transcript">Transcript</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="highlightFilm" 
              checked={selectedItems.highlightFilm}
              onCheckedChange={() => handleCheckboxChange('highlightFilm')}
            />
            <label htmlFor="highlightFilm">Highlight Film</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="testScores" 
              checked={selectedItems.testScores}
              onCheckedChange={() => handleCheckboxChange('testScores')}
            />
            <label htmlFor="testScores">SAT / ACT Scores</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="classSchedule" 
              checked={selectedItems.classSchedule}
              onCheckedChange={() => handleCheckboxChange('classSchedule')}
            />
            <label htmlFor="classSchedule">Class Schedule</label>
          </div>
        </div>
        <Input
          type="email"
          placeholder="Coach's Email Address"
          value={coachEmail}
          onChange={handleEmailChange}
          className="mb-4"
        />
        <Button type="submit" className="w-full">
          Generate and Send Email
        </Button>
      </form>
    </div>
  );
};

export default CoachConnect;