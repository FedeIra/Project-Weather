import React from 'react';
import SearchBar from './SearchBar.jsx';
import '../hoja-de-estilos/Nav.css';

function Nav({ onSearch }) {
  return (
    <div>
      <nav
        className="navbar
      fixed-top
      "
      >
        <div className="navbar_container">
          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
