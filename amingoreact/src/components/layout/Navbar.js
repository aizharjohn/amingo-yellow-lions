import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar bg-dark">
      <h1>
        <a href="index.html">
          <i class="fas fa-user-md"></i> Health Share
        </a>
      </h1>
      <ul>
        <li>
          <a href="register.html">Sign Up</a>
        </li>
        <li>
          <a href="login.html">Sign In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
