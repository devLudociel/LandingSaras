import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import elige from '../../assets/Elige.png'

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nl7hmyo', 'template_zmp443e', form.current, 'F-tQMe8eX-lX9tg6k')
      .then((result) => {
        console.log(result.text);
        form.current.reset()
        alert("Correo enviado correctamente")
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <Navbar />

      <div className="containerForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Mensaje</label>
          <textarea name="message" />
          <input type="submit" value="Send" className='btnSubmit' />
        </form>
        <img src={elige} alt="" />
      </div>

      <Footer />
    </>
  );
};

export default Contacto