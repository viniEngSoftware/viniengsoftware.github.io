import { createUseStyles } from 'react-jss';

const useCabecalhoStyles = createUseStyles({
    cabecalho1: {
        backgroundColor: 'rgba(32, 30, 67, 1)',
        height: '3vh',
        textDecoration: 'none',
    },

    cabecalhoLogo: {
        height: '100vh',
        backgroundColor: 'rgba(80, 140, 155, 0.5)',
        textDecoration: 'none',
    },
    
    h1: {
        color: 'white',
        fontSize: '150px',
        position: 'absolute',
        margin: '400px 0 0 200px',
        textDecoration: 'none',
    },

    logo: {
        marginRight: '900px',
        height: '80px',
        width: '80px',
        backgroundColor: 'white',
        textDecoration: 'none',
    },

    nav: {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        textDecoration: 'none',
    },

    ul: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '1%',
        textDecoration: 'none',
    },

    li: {
        display: 'flex',
        padding: '20px',
        border: '1px solid white',
        fontSize: '20px',
        textDecoration: 'none',
    },

    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
}
);

export default useCabecalhoStyles;