import React from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import logo from '../../assets/img/Group 43.png';

const Header = () => (
  <header className={styles.header}>
    <section className={styles.header__wrapper}>
      <div className={styles.header__logo}>
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <h1>Testtask</h1>
      </div>
      <nav className={styles.header__nav}>
        <a href="#users">
          <Button type="button" text="Users"/>
        </a>
        <a href="#signUp">
          <Button type="button" text="Sign up"/>
        </a>
      </nav>
    </section>
  </header>
)

export default Header
