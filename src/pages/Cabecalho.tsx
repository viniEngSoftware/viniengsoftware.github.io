// src/pages/Cabecalho.tsx
import React from "react";
import { Link } from 'react-router-dom';
import useCabecalhoStyles from "../styles/Cabecalho";
import WhatsAppButton from "../components/BotaoWhatsap";

const Cabecalho: React.FC = () => {
    const classes = useCabecalhoStyles();
    
    return (
        <div>
            <div className={classes.cabecalho1}></div>
            <h1 className={classes.h1}>INSS</h1>

            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.logo}>
                        <Link to="/" style={{textDecoration: 'none'}}></Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/servicos" className={classes.a}>Serviços</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/instagram" className={classes.a}>Instagram</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/sobre" className={classes.a}>Sobre</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/contato" className={classes.a}>Contato</Link>
                    </li>
                </ul>
            </nav>
            <WhatsAppButton phoneNumber={""}/>
        </div>
    );
};

export default Cabecalho;
