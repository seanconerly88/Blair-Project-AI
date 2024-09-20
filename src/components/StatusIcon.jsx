import React from 'react';
import { Circle } from 'lucide-react';

const StatusIcon = ({ active, onClick, title }) => {
  return (
    <Circle
      className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
        active ? 'fill-purple-600 text-purple-600' : 'fill-transparent text-gray-400'
      }`}
      onClick={onClick}
    >
      <title>{title}</title>
    </Circle>
  );
};

export default StatusIcon;