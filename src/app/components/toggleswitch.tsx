import React from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle, label }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="mr-3 text-sm font-medium text-white">{label}</span>
      <div 
        className={`w-12 h-7 flex items-center rounded-full p-1 cursor-pointer transform duration-300 ease-in-out ${
          isOn ? 'bg-green-400' : 'bg-gray-400'
        }`}
        onClick={onToggle}
      >
        <div 
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isOn ? 'translate-x-4' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;