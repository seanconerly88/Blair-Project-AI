import React, { useState } from 'react';

const SchoolNotes = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [notes, setNotes] = useState({});

  const schools = ['University A', 'College B', 'Institute C', 'University D', 'College E'];

  const handleSchoolClick = (school) => {
    setSelectedSchool(school);
  };

  const handleNoteChange = (e) => {
    setNotes({
      ...notes,
      [selectedSchool]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex mb-4">
        {schools.map((school) => (
          <button
            key={school}
            onClick={() => handleSchoolClick(school)}
            className={`mr-2 px-3 py-1 rounded ${
              selectedSchool === school ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {school}
          </button>
        ))}
      </div>
      {selectedSchool && (
        <div>
          <h3 className="font-semibold mb-2">Notes for {selectedSchool}</h3>
          <textarea
            value={notes[selectedSchool] || ''}
            onChange={handleNoteChange}
            className="w-full h-32 p-2 border rounded"
            placeholder="Enter your notes here..."
          />
        </div>
      )}
    </div>
  );
};

export default SchoolNotes;