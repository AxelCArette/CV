import { useState, useEffect } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? (
    <NavbarMobile 
      isAuthenticated={isAuthenticated} 
      handleLogin={() => setIsAuthenticated(true)} 
      handleLogout={() => setIsAuthenticated(false)} 
    />
  ) : (
    <NavbarDesktop 
      isAuthenticated={isAuthenticated} 
      handleLogin={() => setIsAuthenticated(true)} 
      handleLogout={() => setIsAuthenticated(false)} 
    />
  );
}
