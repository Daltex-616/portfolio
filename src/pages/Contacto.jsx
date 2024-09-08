import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../public/contacto.css";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_lastname:'',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {  
    e.preventDefault();

    emailjs.send('service_timrf4p', 'template_upbf359', formData, 'EbjMmhtNilolaMSDO')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('El correo se ha enviado exitosamente!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Hubo un problema al enviar el correo. Inténtalo nuevamente.');
      });

    setFormData({
        user_name: '',
        user_lastname:'',
        user_email: '',
        message: ''
    });
  };

  return (
    <>
      <section className='form'>
        <h2 className='form__title'>Contacto</h2>
        <form className='form__form' onSubmit={handleSubmit}>
          <div className='form__input-container'>
            <label>Nombre
              <input
                type="text" 
                name="user_name" 
                value={formData.user_name} 
                onChange={handleChange} 
                required
              />
            </label>
          </div>
          <div className='form__input-container'>
            <label>Apellido
              <input
                type="text" 
                name="user_name" 
                value={formData.user_lastname} 
                onChange={handleChange} 
                required
              />
            </label>
          </div>

          <div className='form__input-container'>
            <label>Email
              <input
                type="email" 
                name="user_email" 
                value={formData.user_email} 
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className='form__input-container'>
            <label>Mensaje
              <textarea
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
          </div>

          <div className='form__input-container'>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </section>
    </>
  );
}
