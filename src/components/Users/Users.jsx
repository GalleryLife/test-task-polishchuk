import React, {useEffect} from 'react'
import styles from './Users.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {getMoreUsers, getUsers} from '../../features/users/usersSlice';
import Title from '../Title/Title';
import UserItem from './UserItem/UserItem';
import Button from '../Button/Button';

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(({users}) => users.users)
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  const moreUsers = () => {
    dispatch(getMoreUsers())
  }
  
  return(
    <section className={styles.wrapper}>
      <Title text="Working with GET request"/>
      <section className={styles.wrapper__users}>
        {users.map((items) => <UserItem key={items.id} {...items}/>)}
      </section>
      <Button type='button' action={moreUsers} text="Show more"/>
    </section>
    )
}

export default Users;
