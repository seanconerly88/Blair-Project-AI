import React from 'react';
import { FileText, Home, Footprints } from 'lucide-react';

const StatusIcon = ({ type, active, onClick }) => {
  const iconProps = {
    className: `w-6 h-6 cursor-pointer transition-colors duration-200 ${
      active ? 'text-purple-600' : 'text-gray-400'
    }`,
    onClick: onClick,
  };

  const IconComponent = {
    offer: FileText,
    officialInvite: Home,
    visit: Footprints,
  }[type];

  return (
    <IconComponent {...iconProps}>
      <title>{type.charAt(0).toUpperCase() + type.slice(1)}</title>
    </IconComponent>
  );
};

export default StatusIcon;
