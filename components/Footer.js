import React from 'react';
import footerImg from '../images/footer-image.svg';

const Footer = () => {
  return (
    <footer className='footer text-center py-3'>
      <div className='container'>
        <img src={footerImg} alt='holding earth' />
        <p>Made with 💚️ by SparkDev FIU</p>
      </div>
    </footer>
  );
};

export default Footer;
