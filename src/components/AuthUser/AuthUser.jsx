import Title from '../Title/Title';
import React, {useState} from 'react';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import styles from './AuthUser.module.scss';
import File from '../CustomInput/File/File';
import {ErrorMessage, Form, Field, Formik} from 'formik';
import {authUser} from '../../features/users/usersSlice';
import CustomRadio from '../CustomInput/Radio/CustomRadio';
import {validationSchema, initialValues} from '../../validation/validation';


const AuthUser = ({responseText}) => {
  const [fieldValue, setFieldValue] = useState(null)
  const [isError, setError] = useState(false)
  
  const dispatch = useDispatch()
  
  const handleSetPhoto = (event) => {
    const {type, size} = event.currentTarget.files[0]
    if (type === 'image/jpeg' && size < 5e+6) {
      setFieldValue(event.currentTarget.files[0])
      setError(false)
    } else {
      setError(true)
    }
  }
  
  const handleSubmit = (values, {setSubmitting}) => {
    const formData = new FormData()
    formData.append('position_id', 1);
    formData.append('name', values.firstName);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('photo', fieldValue);
    setSubmitting = false
    dispatch(authUser(formData))
  }
  
  const responseFalse = () => responseText ? <h2 className={styles.error}>{responseText}</h2> : ''
  
  return (
    <section className={styles.wrapper}>
      {responseFalse()}
      <a name="signUp"/>
      <Title text="Working with POST request"/>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.wrapper__form}>
          <div className={styles.form__items}>
            <label>
              <Field placeholder="Your Name" name="firstName" className={styles.item} type="text"/>
              <ErrorMessage name="firstName"/>
            </label>
            <label>
              <Field placeholder="Email" name="email" className={styles.item} type="email"/>
              <ErrorMessage name="email"/>
            </label>
            <label htmlFor="phone">
              <Field placeholder="Phone" name="phone" id={styles.phone} className={styles.item} type="text"/>
              <span>+38 (XXX) XXX - XX - XX</span>
              <ErrorMessage name="phone"/>
            </label>
          </div>
          <div className={styles.form__radio}>
            <h4>Select your position</h4>
            <Field
              name="picked"
              value="1"
              id="Frontend developer"
              label="Frontend developer"
              component={CustomRadio}
            />
            <Field
              name="picked"
              value="2"
              id="Backend developer"
              label="Backend developer"
              component={CustomRadio}
            />
            <Field
              name="picked"
              value="3"
              id="Designer"
              label="Designer"
              component={CustomRadio}
            />
            <Field
              name="picked"
              value="4"
              id="QA"
              label="QA"
              component={CustomRadio}
            />
            <ErrorMessage name="picked"/>
          </div>
          <File handleSetPhoto={handleSetPhoto} fieldValue={fieldValue} isError={isError}/>
          <Button type="submit" text="Sign in"/>
        </Form>
      </Formik>
    </section>
  );
}

export default AuthUser;
