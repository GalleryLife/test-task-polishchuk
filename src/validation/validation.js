import * as Yup from 'yup';

export const validationSchema = Yup.object({
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
})



export const initialValues = {firstName: '', email: '', phone: '', picked: ''}
