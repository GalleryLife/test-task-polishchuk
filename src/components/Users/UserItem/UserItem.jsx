import React from 'react';
import styles from './UserItem.module.scss';

const UserItem = ({name, email, phone, photo, position}) => {
  const textSlice = (text) => {
    if (text.length > 30) {
        return  text.slice(0, 30).concat('...')
    }
    return text
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__item}>
        <img src={photo} alt={name}/>
        <h3>{textSlice(name)}</h3>
        <h4>{position}</h4>
        <h4>{textSlice(email)}</h4>
        <h4>{phone}</h4>
      </div>
    </div>
  )
}

export default UserItem;
