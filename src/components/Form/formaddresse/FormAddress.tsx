import React from 'react';
import FormCountry from './FormCountry';
import FormCity from './FormCity';
import FormPostalCode from './FormPostalCode';
import FormStreet from './FormStreet';
import FormRegion from './FormRegion';

interface FormAddressProps {
  formData: {
    country: string;
    city: string;
    postalCode: string;
    street: string;
    region: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormAddress: React.FC<FormAddressProps> = ({ formData, handleChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Adresse</h2>
      <FormCountry value={formData.country} onChange={handleChange} />
      <FormCity value={formData.city} onChange={handleChange} />
      <FormPostalCode value={formData.postalCode} onChange={handleChange} />
      <FormStreet value={formData.street} onChange={handleChange} />
      <FormRegion value={formData.region} onChange={handleChange} />
    </div>
  );
};

export default FormAddress;
