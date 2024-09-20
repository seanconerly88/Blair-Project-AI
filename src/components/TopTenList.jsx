import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TopTenList = () => {
  const [schools, setSchools] = useState([
    { id: 'school1', name: 'University A' },
    { id: 'school2', name: 'College B' },
    { id: 'school3', name: 'Institute C' },
    { id: 'school4', name: 'University D' },
    { id: 'school5', name: 'College E' },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(schools);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSchools(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="schools">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className="bg-white rounded-lg shadow">
            {schools.map((school, index) => (
              <Draggable key={school.id} draggableId={school.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-move"
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
  );
};

export default TopTenList;