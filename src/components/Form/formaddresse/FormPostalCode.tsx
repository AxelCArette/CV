import React from 'react';

interface FormPostalCodeProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormPostalCode: React.FC<FormPostalCodeProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Code postal :</label>
      <input
        type="text"
        id="postalCode"
        name="postalCode"
        value={value}
        onChange={onChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FormPostalCode;
