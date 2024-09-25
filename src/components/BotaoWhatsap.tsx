import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        backgroundColor: '#25D366',
        border: 'none',
        width: '180px',
        borderRadius: '20px',
        cursor: 'pointer',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '550px 0 0 1300px',
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '24px', height: '24px', marginRight: '10px' }}
      />
      Fale Conosco
    </button>
  );
};

export default WhatsAppButton;
