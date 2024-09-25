import { createUseStyles } from 'react-jss';

const useContatoStyles = createUseStyles({
  formContainer: {
    maxWidth: 500,
    margin: 'auto',
    padding: 20,
    border: '1px solid rgba(32, 30, 67, 1)',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    display: 'block',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    border: '1px solid #ccc',
    borderRadius: 5,
  },
  textarea: {
    width: '100%',
    padding: 10,
    border: '1px solid #ccc',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    padding: 10,
    border: 'none',
    backgroundColor: '#201E43',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: 5,
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#508C9B',
    },
  },
});

export default useContatoStyles;
