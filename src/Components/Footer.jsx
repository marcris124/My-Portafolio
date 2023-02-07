import React from 'react';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>

         <div>

          <div className='info-footer ' > <i className="fa-brands fa-whatsapp green"></i> <p >+57 <b>317 399 6738</b></p> </div>
          <div className='info-footer' > <i className="fa-solid fa-envelope"></i> <a target={"_blank"} href="https://outlook.live.com/mail/0/deeplink/compose?mailtouri=mailto%3Amartinavendano095%40gmail.com">martinavendano095@gmail.com</a>  </div>
          <div className='info-footer' > <i className="fa-solid fa-location-dot red"></i> <p> Valle del Cauca,Colombia</p></div>

      </div> 
        <div>
          <p className='copy-right'>  Martin Aguirre 2023. All Rights Reserved  </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;