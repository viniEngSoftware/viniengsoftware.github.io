import { createUseStyles } from 'react-jss';
import 'typeface-roboto';

const useGlobalStyles = createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      fontFamily: 'Roboto, sans-serif',
    },
    'html, body': {
      margin: 0,
      padding: 0,
      height: 'auto',
      width: 'auto',
    }
  }
});

const GlobalStyle = () => {
  useGlobalStyles(); // Chama o hook para aplicar os estilos globais
  return null; // Este componente não renderiza nada
};

export default GlobalStyle;
