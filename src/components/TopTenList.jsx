import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import StatusIcon from './StatusIcon';

const TopTenList = () => {
  const [schools, setSchools] = useState([
    { id: 'school1', name: 'Cornell University', notes: [], offer: false, officialInvite: false, visit: false },
    { id: 'school2', name: 'Tufts University', notes: [], offer: false, officialInvite: false, visit: false },
    { id: 'school3', name: 'Dartmouth College', notes: [], offer: false, officialInvite: false, visit: false },
    { id: 'school4', name: 'Union College', notes: [], offer: false, officialInvite: false, visit: false },
    { id: 'school5', name: 'Brown University', notes: [], offer: false, officialInvite: false, visit: false },
  ]);

  const [selectedSchool, setSelectedSchool] = useState(null);
  const [newNote, setNewNote] = useState('');

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(schools);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSchools(items);
  };

  const handleSchoolClick = (school) => {
    setSelectedSchool(selectedSchool && selectedSchool.id === school.id ? null : school);
    setNewNote('');
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const updatedSchools = schools.map((school) => {
        if (school.id === selectedSchool.id) {
          return {
            ...school,
            notes: [...school.notes, { id: Date.now(), text: newNote }],
          };
        }
        return school;
      });
      setSchools(updatedSchools);
      setNewNote('');
    }
  };

  const toggleStatus = (schoolId, status) => {
    setSchools(schools.map(school => 
      school.id === schoolId ? { ...school, [status]: !school[status] } : school
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="schools">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="mb-4">
              {schools.map((school, index) => (
                <li key={school.id} className="mb-2">
                  <Draggable draggableId={school.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-4 bg-purple-100 rounded-lg cursor-move flex items-center justify-between"
                      >
                        <div onClick={() => handleSchoolClick(school)}>
                          {index + 1}. {school.name}
                        </div>
                        <div className="flex space-x-2">
                          <StatusIcon
                            type="offer"
                            active={school.offer}
                            onClick={() => toggleStatus(school.id, 'offer')}
                          />
                          <StatusIcon
                            type="officialInvite"
                            active={school.officialInvite}
                            onClick={() => toggleStatus(school.id, 'officialInvite')}
                          />
                          <StatusIcon
                            type="visit"
                            active={school.visit}
                            onClick={() => toggleStatus(school.id, 'visit')}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      selectedSchool && selectedSchool.id === school.id
                        ? 'max-h-96 opacity-100 mt-2'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold mb-2 text-purple-800">{school.name} Notes</h3>
                      <ul className="mb-4">
                        {school.notes.map((note) => (
                          <li key={note.id} className="mb-2 p-2 bg-white rounded">{note.text}</li>
                        ))}
                      </ul>
                      <div className="flex">
                        <input
                          type="text"
                          value={newNote}
                          onChange={(e) => setNewNote(e.target.value)}
                          className="flex-grow p-2 border rounded-l"
                          placeholder="Add a new note..."
                        />
                        <button
                          onClick={handleAddNote}
                          className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-purple-700"
                        >
                          Add Note
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TopTenList;
