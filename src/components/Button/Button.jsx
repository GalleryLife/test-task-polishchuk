import React from 'react'

const Button = ({text, action, type}) => (
 <button 
 onClick={action}
 type={type}
 style={{
   backgroundColor: '#F4E041',
   border: 'none',
   width: '120px',
   height: '34px',
   borderRadius: '80px',
   lineHeight: '26px',
   cursor: 'pointer'
 }}
 >{text}</button>
)

export default Button;
