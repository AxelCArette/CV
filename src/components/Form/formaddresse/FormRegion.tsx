import React from 'react';

interface FormRegionProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRegion: React.FC<FormRegionProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="region" className="block text-sm font-medium text-gray-700">Région :</label>
      <input
        type="text"
        id="region"
        name="region"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FormRegion;
