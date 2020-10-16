import React from 'react';
import footerImg from '../images/footer-image.svg';

const Footer = (props) => {
  console.log(props);
  return (
    <footer
      className='footer text-center py-3'
      style={{ marginTop: props.marginTop }}
    >
      <div className='container'>
        <img src={footerImg} alt='holding earth' />
        <p>Made with 💚️ by SparkDev FIU {props.test}</p>
      </div>
    </footer>
  );
};

export default Footer;
