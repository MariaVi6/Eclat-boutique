const Footer = () => {
    return ( 
    <>
    <div className="footer">
        <div className="logo-footer"></div>
        <ul className="ul-footer">
            <li className="ul1-footer">Sobre</li>
            <li className="ul2-footer">Contato</li>
            <li className="ul3-footer">Politica de Privacidade</li>
        </ul>
        <div className="redes-sociais-footer">
            <img className="pinterest" src="/src/image/logotipo-do-pinterest.png" alt="" />
            <img className="instagram" src="/src/image/instagram.png" alt="" />
            <img className="email" src="/src/image/o-email.png" alt="" />
        </div>
        <p className="direitos-reservados"> © 2024 Maria Vitória / Pablo Lima</p>
    </div>
    </> 
    );
}

export default Footer;