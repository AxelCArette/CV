import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Maxime & Axel. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
