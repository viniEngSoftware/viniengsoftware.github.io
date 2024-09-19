import React, { useState } from 'react';
import useContatoStyles from '../styles/ContactForm'; // Corrigido o import do arquivo JSS

const ContactForm: React.FC = () => {
  const classes = useContatoStyles(); // Chamando os estilos definidos no JSS
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={classes.formContainer}>
      <h1 className={classes.title}>Entre em Contato</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="name" className={classes.label}>Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={classes.input} // Classe do input
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="email" className={classes.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={classes.input} // Classe do input
            required
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="message" className={classes.label}>Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={classes.textarea} // Classe do textarea
            required
          />
        </div>
        <button type="submit" className={classes.button}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
