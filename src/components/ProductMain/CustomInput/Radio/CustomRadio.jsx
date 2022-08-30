import React from 'react';
import styles from './CustomRadio.module.scss'

const CustomRadio = ({
  field,
  form: {touched, errors},
  ...props
}) => (
  <div className={styles.wrapper}>
    <label className={styles.form__control}>
      <input type="radio" {...field} {...props}/>
      {props.label}
    </label>
  </div>
)

export default CustomRadio;
