import { useState } from 'react';

interface LoginFormProps {}

export default function LoginForm({}: LoginFormProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    console.log('Email:', email);
    console.log('Mot de passe:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center">Connexion</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Adresse email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition font-bold"
      >
        Se connecter
      </button>
    </form>
  );
}
