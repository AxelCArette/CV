import React from 'react';

interface FormStreetProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormStreet: React.FC<FormStreetProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="street" className="block text-sm font-medium text-gray-700">Rue :</label>
      <input
        type="text"
        id="street"
        name="street"
        value={value}
        onChange={onChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FormStreet;
