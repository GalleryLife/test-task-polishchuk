import React from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import styles from './ProductMain.module.scss';
import mainImg from '../../assets/img/banner.jpg';

const ProductMain = () => (
    <div className={styles.main}>
      <img className={styles.main__img} src={mainImg} alt="main image"/>
      <div className={styles.main__info}>
        <Title text="Test assignment for front-end developer"/>
        <p>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
          understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
          should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        <a href="#signUp">
          <Button type="button" text="Sign up"/>
        </a>
      </div>
    </div>
)

export default ProductMain;
