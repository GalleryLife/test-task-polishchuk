import React from 'react';
import styles from './Button.module.scss';

const Button = ({text, action, type}) => (
 <button 
 onClick={action}
 type={type}
 className={styles.button}
 >{text}</button>
)

export default Button;
