import React from 'react';
import Title from '../Title/Title';
import successImg from '../../assets/img/success-image.png';

const Success = ({responseText}) => (
  <section style={{
    paddingBottom: '50px'
  }}>
    <Title text={responseText}/>
    <div>
      <img src={successImg} alt="success image"/>
    </div>
  </section>
)

export default Success;
