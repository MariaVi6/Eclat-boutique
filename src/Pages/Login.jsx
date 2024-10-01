const Login = () => {
    return (
    <>
    <div className="body">
    <div className="container" id="container">
        <div className="form-container register-container">
            <form>
                <h1>Registre-se aqui</h1>
                <div className="form-control">
                    <input type="text" id="username" placeholder="Nome" />
                    <small id="username-error"></small>
                    <span></span>
                </div>
                <div className="form-control">
                    <input type="email" id="email" placeholder="Email" />
                    <small id="email-error"></small>
                    <span></span>
                </div>
                <div className="form-control">
                    <input type="password" id="password" placeholder="Senha" />
                    <small id="password-error"></small>
                    <span></span>
                </div>
                <button type="submit" value="submit">Registrar</button>
                <span className="span">ou use sua conta</span>
                <div className="social-container">
                    <a href="#" className="social"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fa-brands fa-google"></i></a>
                    <a href="#" className="social"><i className="fa-brands fa-tiktok"></i></a>
                </div>
            </form>
        </div>

        {/* LOGIN  */}
        <div className="form-container login-container">
            <form className="form-lg">

            <h1 className="titulo-login">Faça login aqui</h1>

            <div className="form-control2">
                <input type="email" className="email-2" placeholder="Email" />
                <small className="email-error-2"></small>
                <span></span>
            </div>

            <div className="form-control2">
                <input type="password" className="password-2" placeholder="Senha" />
                <small className="password-error-2"></small>
                <span></span>
            </div>

            <div className="content">
                <div className="checkbox">
                <input type="checkbox" name="checkbox" className="checkbox" id="checkbox" />
                <label className="texto-checkbox-login" id="checkbox"htmlFor="checkbox">Lembre-me</label>
                </div>

            <div className="esquecer-senha">
                <a className="a-esquecer-senha" href="#">Esqueceu a senha?</a>
            </div>

            </div>

            <button type="submit" value="submit" className="botao-login">Fazer login</button>

            <span className="subtitulo-botao-login">ou use sua conta</span>
            <div className="social-container">
                <div  className="facebook-login"></div>
                <div  className="google-login"></div>
                <div  className="email-login"></div>

            </div>

            </form>

        </div>

        {/*OVERLAY*/}

        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1 className="title">Olá <br /> amigos</h1>
                    <p className="p">Se você tem uma conta, faça login aqui e divirta-se</p>
                    <button className="ghost" id="login">
                        Fazer login
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                </div>

                <div className="overlay-panel overlay-right">
                    <h1 className="titulo-overlay">Ainda não tem conta?</h1>
                    <button className="ghost" id="register">Registra-se<i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>


    </> );
}

export default Login;