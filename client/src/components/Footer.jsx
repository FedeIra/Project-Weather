import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react';
import '../hoja-de-estilos/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/federico-irarr%C3%A1zaval-314b89a1/"
        target="blank"
        rel="nofollow"
      >
        <IconButton
          size="lg"
          icon={<FaLinkedin size="3rem" />}
          className="icon_footer"
        />
      </a>
      <a href="https://github.com/FedeIra" target="blank" rel="nofollow">
        <IconButton
          size="lg"
          icon={<FaGithub size="3rem" />}
          className="icon_footer"
        />
      </a>
      <a href="mailto: fedeirar@gmail.com" target="blank" rel="nofollow">
        <IconButton
          size="lg"
          icon={<FaEnvelope size="3rem" />}
          className="icon_footer"
        />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5491167887879&text=Hey"
        target="blank"
        rel="nofollow"
      >
        <IconButton
          size="lg"
          icon={<FaWhatsapp size="3rem" />}
          className="icon_footer"
        />
      </a>
    </div>
  );
};

export default Footer;
