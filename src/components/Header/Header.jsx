import React from 'react'
import Button from '../Button/Button';
import logo from '../../assets/img/Group 43.png'
import styles from './Header.module.scss'

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
        <Button type='button' text="Users"/>
        <Button type='button' text="Sign up"/>
      </nav>
    </section>
  </header>
)

export default Header
