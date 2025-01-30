import { useState, useEffect } from 'react';

export default function NavbarMobile({ isAuthenticated, handleLogin, handleLogout }: { isAuthenticated: boolean; handleLogin: () => void; handleLogout: () => void; }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Fermer le menu en cliquant en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      if (menu && !menu.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsHelpOpen(false);
        setIsAccountOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <a href="/">
        <img src="src/assets/img/logo.png" alt="logo" className="h-8 w-auto" />
      </a>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
        ☰
      </button>
      <div id="mobile-menu" className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <a href="#" className="block px-4 py-2">Consulter les CV</a>
          
          <div className="relative">
            <button 
              onClick={() => setIsHelpOpen(!isHelpOpen)} 
              className="flex justify-between items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span>Aide</span>
              <svg className={`ml-2 h-4 w-4 transform transition-transform ${isHelpOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 overflow-hidden transition-height duration-300 ${isHelpOpen ? 'max-h-40' : 'max-h-0'}`}>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Découvrir le site</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Menu des cours</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Aide</a>
            </div>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsAccountOpen(!isAccountOpen)} 
              className="flex justify-between items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <span>{isAuthenticated ? 'Mon Profil' : 'Mon compte'}</span>
              <svg className={`ml-2 h-4 w-4 transform transition-transform ${isAccountOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 overflow-hidden transition-height duration-300 ${isAccountOpen ? 'max-h-40' : 'max-h-0'}`}>
              {isAuthenticated ? (
                <>
                  <a href="/profil" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Voir mon profil</a>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Déconnexion</button>
                </>
              ) : (
                <>
                  <button onClick={handleLogin} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Connexion</button>
                  <a href="/inscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Inscription</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
