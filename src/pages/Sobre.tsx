import React from 'react';
import useAboutStyles from '../styles/About'; // Ajuste o caminho conforme necessário

const About: React.FC = () => {
  const classes = useAboutStyles();

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.aboutContent}>
        <h1>AQUI VAI O TEXTO SOBRE</h1>
      </div>
      <div className={classes.aboutFoto}>
        <h1>AQUI VAI A IMAGEM</h1>
      </div>
    </div>
  );
};

export default About;
