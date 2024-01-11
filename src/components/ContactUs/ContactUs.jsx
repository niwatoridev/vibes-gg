import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';



const SERVICE_ID = 'service_54k9ebe';
const TEMPLATE_ID = 'template_wkmv23l';
const PUBLIC_KEY = 'Orwp051eKI2zZG7Ye';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Número de Telefono</label>
      <input type="phone" name="user_phone"/>
      <label>¿Que tienes en mente?</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  return (
        <section id="contact">
  
  <h1 class="section-header">Contact</h1>
  
  <div class="contact-wrapper">
  
  {/* <!-- Left contact page -->  */}
    
    <form id="contact-form" class="form-horizontal">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  {/* <!-- Left contact page -->  */}
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
          <li><a href="https://www.facebook.com/vibesgg" rel="noreferrer" target="_blank" class="contact-icon">
            <i class="fa-brands fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li><a href="https://www.youtube.com/@vibesgg2472" rel="noreferrer" target="_blank" class="contact-icon">
            <i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
          </li>      
          <li><a href="https://www.twitch.tv/vibesgg_" rel="noreferrer" target="_blank" class="contact-icon">
            <i class="fa-brands fa-twitch" aria-hidden="true"></i></a>
          </li>      
        </ul>
        <hr/>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>  
  
  
  );
};

export default ContactUs;