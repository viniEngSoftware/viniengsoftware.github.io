import { createUseStyles } from 'react-jss';

const usePostIntagramStyles = createUseStyles({
  carouselContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: 'rgba(32, 30, 67, 1)',
    position: 'relative',
    color: 'white',
    height: '80vh',
  },

  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  carouselContentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    transition: 'transform 0.5s ease',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  carouselContent: {
    width: '200px',
    height: '350px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#000',
    margin: '30px',
  },

  carouselImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },

  carouselLink: {
    display: 'block',
    marginTop: '10px',
    color: '#3498db',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default usePostIntagramStyles;
