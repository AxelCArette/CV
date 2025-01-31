import React from 'react';

interface FormCountryProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormCountry: React.FC<FormCountryProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="country" className="block text-sm font-medium text-gray-700">Pays :</label>
      <input
        type="text"
        id="country"
        name="country"
        value={value}
        onChange={onChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FormCountry;
