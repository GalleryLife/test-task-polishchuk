import React, {useState} from 'react';
import styles from './AuthUser.module.scss';
import {ErrorMessage, Form, Field, Formik} from 'formik';
import * as Yup from 'yup';
import Title from '../Title/Title';
import {useDispatch} from 'react-redux';
import Button from '../Button/Button';
import CustomRadio from '../ProductMain/CustomInput/Radio/CustomRadio';
import File from '../ProductMain/CustomInput/File/File';

const AuthUser = () => {
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
  
  const handleSubmit = (values) => {
    const formData = new FormData()
    formData.append('position_id', 1);
    formData.append('name', values.firstName);
    formData.append('email', values.email);
    formData.append('phone', values.phone);
    formData.append('photo', fieldValue);
    // dispatch(authUser(formData))
    console.log(values)
  }
  
  return (
    <section className={styles.wrapper}>
      <Title text="Working with POST request"/>
      <Formik
        initialValues={{firstName: '', email: '', phone: '', picked: ''}}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          phone: Yup.string()
            .matches(`^[\+]{0,1}380([0-9]{9})$`, 'Phone number is not valid')
            .required('Required'),
          picked: Yup.string()
            .oneOf(
              ['1', '2', '3', '4'],
              'Invalid Job Type'
            )
            .required('Required')
        })}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            handleSubmit(values)
            setSubmitting = false
          }, 400)
        }}
      >
        <Form className={styles.wrapper__form}>
          <Field placeholder="Your Name" name="firstName" type="text"></Field>
          <ErrorMessage name="firstName"/>
          <Field placeholder="Email" name="email" type="email"></Field>
          <ErrorMessage name="email"/>
          <label htmlFor="phone">
            <Field placeholder="Phone" name="phone" type="text"></Field>
          </label>
          <ErrorMessage name="phone"/>
          <div className={styles.form_radio}>
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
          </div>
          <ErrorMessage name="picked"/>
          <File handleSetPhoto={handleSetPhoto} fieldValue={fieldValue} isError={isError}/>
          <Button type="submit" text="Submit"/>
        </Form>
      </Formik>
    </section>
  );
}

export default AuthUser;
