import { useState } from 'react';

interface FormProps {}

export default function Form({}: FormProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
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
          className="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300"
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
          className="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300"
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
