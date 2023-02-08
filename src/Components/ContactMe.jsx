import React from 'react';
import '../styles/contactMe.css'
import emailjs from 'emailjs-com'
import contactMeImg from '../Components/images/contactMeIMG.jpeg'

const ContactMe = () => {

  const sendEmail =(e) =>{
    e.preventDefault();

    emailjs.sendForm('service_0pxphvm', 'template_aq7rjnj', e.target, 'hiyVj7NolOrBLQ0Hu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }


  return (
    <div id='contact-me'  className='contactForm-container'>
      <h1>Contact ME</h1>
      <div className='form-content'>
        <form onSubmit={sendEmail}>
          <div className='input-contetn'>
            <label htmlFor='name' >Name</label>
            <input placeholder='Your Name' id='name' type="text" name="from_name" />
          </div>

          <div className='input-contetn'>
            <label htmlFor='email'>Email</label>
            <input placeholder='Your Email' id='email' type="email" name="user_email" />
          </div>

          <div className='input-contetn'>
            <label htmlFor='message'>Message</label>
            <textarea placeholder='Message' id='message' name="message" />
          </div>

          <button className='btn-Form' type="submit" value="Send" >Submit</button>
        </form>
        <div className='img-contact-me'>
        <img src={contactMeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;