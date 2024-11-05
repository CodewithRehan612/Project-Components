// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Next.js Application</h1>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
