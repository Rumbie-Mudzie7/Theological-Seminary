import React from 'react';
import styles from './Navbar.module.scss';

function Navbar () {
  return (
    <div className={`${styles.navbar}`} id="nav">
      <h2>Hello World</h2>
      <p>Grace is so cute! :</p>
    </div>
  )
}

export default Navbar;
