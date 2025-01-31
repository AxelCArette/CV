import React from 'react';

interface FormCityProps {
value: string;
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormCity: React.FC<FormCityProps> = ({ value, onChange }) => {
return (
    <div>
    <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ville :</label>
    <input
        type="text"
        id="city"
        name="city"
        value={value}
        onChange={onChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    </div>
);
};

export default FormCity;
