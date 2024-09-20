import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TopTenList = () => {
  const [schools, setSchools] = useState([
    { id: 'school1', name: 'University A', notes: [] },
    { id: 'school2', name: 'College B', notes: [] },
    { id: 'school3', name: 'Institute C', notes: [] },
    { id: 'school4', name: 'University D', notes: [] },
    { id: 'school5', name: 'College E', notes: [] },
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
    setSelectedSchool(school);
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

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="schools">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="mb-4">
              {schools.map((school, index) => (
                <Draggable key={school.id} draggableId={school.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 border-b last:border-b-0 hover:bg-purple-100 cursor-move"
                      onClick={() => handleSchoolClick(school)}
                    >
                      {index + 1}. {school.name}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {selectedSchool && (
        <div className="mt-4 p-4 bg-purple-100 rounded-lg">
          <h3 className="font-semibold mb-2 text-purple-800">{selectedSchool.name} Notes</h3>
          <ul className="mb-4">
            {selectedSchool.notes.map((note) => (
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
      )}
    </div>
  );
};

export default TopTenList;
