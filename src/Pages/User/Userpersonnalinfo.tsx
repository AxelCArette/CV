import React from 'react';
import FormUserPersonalInfo from '../../components/Form/FormUserInfo'; // Assure-toi que le chemin est correct

const PersonnalInfo: React.FC = () => {
return (
    <div>
    <h1 className="mt-10 text-center text-2xl font-bold mb-4">Formulaire d'informations personnelles</h1>
    <FormUserPersonalInfo /> 
    </div>
);
};

export default PersonnalInfo;
