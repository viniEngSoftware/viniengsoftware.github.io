import React from 'react';
import useGlobalStyles from '../styles/Cabecalho';
import Cabecalho from './Cabecalho';
import PostsInstagram from './PostsInstagram';
import Servicos from './Servicos';
import Sobre from './Sobre';
import Rodape from './Rodape';

const Site: React.FC = () => {
  const classes = useGlobalStyles();

  return (
    <>
      <div className={classes.cabecalhoLogo}>
        <Cabecalho />
      </div>
      <div style={{ backgroundColor: 'rgba(32, 30, 67, 1)' }}>
        <PostsInstagram />
      </div>
      <div>
        <Servicos/>
      </div>
      <div>
        <Sobre/>
      </div>
      <div>
        <Rodape />
      </div>
    </>
  );
};

export default Site;
