import Title from '../Title/Title';
import Button from '../Button/Button';
import styles from './Users.module.scss';
import UserItem from './UserItem/UserItem';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoreUsers, getUsers} from '../../features/users/usersSlice';

const Users = () => {
  const dispatch = useDispatch()
  const {users, response} = useSelector(({users}) => users)
  const [countPage, setCountPage] = useState(2)
  const lastPage = countPage === response['total_pages']
  
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  
  const moreUsers = () => {
    setCountPage(prev => prev + 1)
    dispatch(getMoreUsers(countPage))
  }
  
  return(
    <section className={styles.wrapper}>
      <a name='users'/>
      <Title text="Working with GET request"/>
      <section className={styles.wrapper__users}>
        {users.map((items) => <UserItem key={items.id} {...items}/>)}
      </section>
      {!lastPage ? <Button type="button" action={moreUsers} text="Show more"/> : ''}
    </section>
    )
}

export default Users;
