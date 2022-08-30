import React from 'react';
import styles from './UserItem.module.scss';

const UserItem = ({name, email, phone, photo, position}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__item}>
        <img src={photo} alt={name}/>
        <h3>{name}</h3>
        <h4>{position}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
      </div>
    </div>
  )
}

export default UserItem;
