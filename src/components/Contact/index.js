import React from 'react';
import emailjs from 'emailjs-com';


import { ContactWrapper, ContactForm } from './styles';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'contact_form', e.target, 'user_C1AOZPrWKX6FXP9nwgzb0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return(
    <>
      <ContactWrapper id="contato" className="contact-form" onSubmit={sendEmail}>
        <h1>Gostou do meu trabalho? Vamos criar seu próximo projeto juntos!</h1>

        <ContactForm>
          <input type="hidden" name="contact_number" />
          <label>
            Nome
            <input type="text" name="user_name"></input>
          </label>

          <label>
            Email
            <input type="email" name="user_email"></input>
          </label>

          <label>
            Me conte sobre seu projeto
            <textarea rows="8" name="message"></textarea>
          </label>

          <button type="submit" value="Send">Enviar</button>
        </ContactForm>
      </ContactWrapper>
    </>
  )
}

export default Contact;