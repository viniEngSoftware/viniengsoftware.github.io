import { createUseStyles } from 'react-jss';

const useServico = createUseStyles({
  galleryContainer: {
    display: 'block',
    height: 'auto',
    paddingBottom: '50px',
  },
  serviceGallery: {
    display: 'flex',
    flexWrap: 'wrap', // Permite que os itens quebrem para a linha seguinte
    gap: 30,
    justifyContent: 'center', // Centraliza os itens horizontalmente
  },
  serviceItem: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'white',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Alinha todos os elementos ao centro
    transition: 'all 0.3s ease',
    margin: '10px', // Espaçamento entre os itens
  },
  expandedItem: {
    width: '100%', // O item expandido ocupa 100% da largura
    position: 'relative',
    transition: 'ease',
    zIndex: 10, // Garante que o item expanda acima dos outros
    margin: '0 auto', // Centraliza o item expandido
  },
  serviceImage: {
    width: '300px', // Define um tamanho fixo para a imagem
    height: '300px', // Altura fixa
    objectFit: 'cover',
    borderRadius: '8px',
    transition: 'none', // Impede que a imagem mude de tamanho
  },
  title: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginTop: '10px',
  },
  topics: {
    marginTop: '10px',
  },
  topicParagraph: {
    cursor: 'pointer',
    color: '#3498db',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  topicContentFull: {
    width: '90vw',
    height: 'auto',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    marginTop: '10px',
    borderRadius: '8px',
    fontSize: '1rem',
    lineHeight: '1.5',
    overflowY: 'auto',
    maxHeight: '400px',
  },
  titlePrincipal :{
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '85px',
  },
});

export default useServico;
