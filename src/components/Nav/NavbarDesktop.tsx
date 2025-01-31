import { useState } from 'react';

export default function NavbarDesktop({ isAuthenticated, handleLogout }: { isAuthenticated: boolean; handleLogin: () => void; handleLogout: () => void; }) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <a href="/">
        <img src="src/assets/img/logo.png" alt="logo" className="h-8 w-auto" />
      </a>

      <div className="flex space-x-8">
        <a href="/CVuser" className="text-gray-700 hover:text-green-500 transition">Consulter les CV</a>

        <div className="relative">
          <button 
            onClick={() => setIsHelpOpen(!isHelpOpen)} 
            className="text-gray-700 hover:text-green-500 transition flex items-center"
          >
            Aide
            <svg className={`ml-1 h-4 w-4 transform transition-transform ${isHelpOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-height duration-300 ${isHelpOpen ? 'max-h-40' : 'max-h-0'}`}>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Découvrir le site</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Menu des cours</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Aide</a>
          </div>
        </div>

        <div className="relative">
          <button 
            onClick={() => setIsAccountOpen(!isAccountOpen)} 
            className="text-gray-700 hover:text-green-500 transition flex items-center"
          >
            {isAuthenticated ? 'Mon Profil' : 'Mon compte'}
            <svg className={`ml-1 h-4 w-4 transform transition-transform ${isAccountOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-height duration-300 ${isAccountOpen ? 'max-h-40' : 'max-h-0'}`}>
            {isAuthenticated ? (
              <>
                <a href="/profil" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Voir mon profil</a>
                <button onClick={handleLogout} className="bg-red-500 block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Déconnexion</button>
              </>
            ) : (
              <>
                <a href="/connexion" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Connexion</a>
                <a href="/inscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Inscription</a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
