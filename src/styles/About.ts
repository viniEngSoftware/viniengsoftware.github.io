import { createUseStyles } from 'react-jss';

const useAboutStyles = createUseStyles({
  aboutContainer: {
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  aboutContent: {
    display: 'flex',
    width: '60%',
    margin: '50px 0 50px 50px',
  },
  aboutFoto: {
    display: 'flex',
    width: '40%',
  },
});

export default useAboutStyles;
