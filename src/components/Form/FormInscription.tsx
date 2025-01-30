import { useState } from 'react';

interface FormProps {}

export default function Form({}: FormProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const colors = [
    'bg-red-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-purple-100',
    'bg-yellow-200',
    'bg-orange-100',
    'bg-teal-100',
    'bg-pink-100',
    'bg-indigo-100',
  ];

  const getColorClass = (inputLength: number): string => {
    return colors[inputLength % colors.length];
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    console.log('Email:', email);
    console.log('Mot de passe:', password);

    const tempEmail = email; 
    setEmail(password); 
    setPassword(tempEmail);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center">
  Inscription chez
  <img src="src/assets/img/logo.png" alt="logo" className="h-5 w-auto" />
</h2>
 <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Adresse email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className={`mt-1 block w-full px-4 py-2 border rounded-md ${getColorClass(email.length)} border-gray-300 focus:ring-green-500 focus:border-green-500`}
        />
        {email && ( 
          <p className="mt-2 text-gray-600">Email saisi : {email}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          className={`mt-1 block w-full px-4 py-2 border rounded-md ${getColorClass(password.length)} border-gray-300 focus:ring-green-500 focus:border-green-500`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition font-bold"
      >
        Valider
      </button>
    </form>
  );
}
