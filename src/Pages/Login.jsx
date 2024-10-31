import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const containerRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const lgEmailRef = useRef(null);
    const lgPasswordRef = useRef(null);
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, , registerLoading, registerError] = useCreateUserWithEmailAndPassword(getAuth);
    const [signInWithEmailAndPassword, , loginLoading, loginError] = useSignInWithEmailAndPassword(getAuth);

    const validateRegisterForm = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email) {
            emailRef.current.nextElementSibling.textContent = 'Email é obrigatório';
        } else {
            emailRef.current.nextElementSibling.textContent = '';
        }

        if (!password) {
            passwordRef.current.nextElementSibling.textContent = 'Senha é obrigatória';
        } else {
            passwordRef.current.nextElementSibling.textContent = '';
        }

        if (email && password) {
            try {
                await createUserWithEmailAndPassword(email, password);
                navigate('/');
            } catch (error) {
                console.error("Registration error:", error);
            }
        }
    };

    const validateLoginForm = async (e) => {
        e.preventDefault();
        const email = lgEmailRef.current.value;
        const password = lgPasswordRef.current.value;

        if (!email) {
            lgEmailRef.current.nextElementSibling.textContent = 'Email é obrigatório';
        } else {
            lgEmailRef.current.nextElementSibling.textContent = '';
        }

        if (!password) {
            lgPasswordRef.current.nextElementSibling.textContent = 'Senha é obrigatória';
        } else {
            lgPasswordRef.current.nextElementSibling.textContent = '';
        }

        if (email && password) {
            try {
                await signInWithEmailAndPassword(email, password);
                navigate('/');
            } catch (error) {
                console.error("Login error:", error);
            }
        }
    };

    return (
        <div className="body">
            <div className="container" ref={containerRef}>
                <div className="form-container register-container">
                    <form onSubmit={validateRegisterForm}>
                        <h1>Registre-se aqui</h1>
                        <div className="form-control">
                            <input type="text" placeholder="Nome" ref={usernameRef} />
                            <small></small>
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" ref={emailRef} />
                            <small></small>
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Senha" ref={passwordRef} />
                            <small></small>
                        </div>
                        <button type="submit" className='botao-register'>Registrar</button>
                        {registerError && <small className="error">{registerError.message}</small>}
                        <span className="subtitulo-botao-register">ou use sua conta</span>
                        <div className="social-container">
                            <div className="facebook-login"></div>
                            <div className="google-login"></div>
                            <div className="email-login"></div>
                        </div>
                    </form>
                </div>
                <div className="form-container login-container">
                    <form onSubmit={validateLoginForm}>
                        <h1>Faça login aqui</h1>
                        <div className="form-control">
                            <input type="email" placeholder="Email" ref={lgEmailRef} />
                            <small></small>
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Senha" ref={lgPasswordRef} />
                            <small></small>
                        </div>
                        <div className="content">
                            <div className="checkbox">
                                <input type="checkbox" name="checkbox" className="checkbox" id="checkbox" />
                                <label className="texto-checkbox-login" htmlFor="checkbox">Lembre-me</label>
                            </div>
                            <div className="esquecer-senha">
                                <a className="a-esquecer-senha" href="#">Esqueceu a senha?</a>
                            </div>
                        </div>
                        <button type="submit" className='botao-login'>Fazer login</button>
                        {loginError && <small className="error">{loginError.message}</small>}
                        <span className="subtitulo-botao-login">ou use sua conta</span>
                        <div className="social-container">
                            <div className="facebook-login"></div>
                            <div className="google-login"></div>
                            <div className="email-login"></div>
                        </div>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Já tem conta?</h1>
                            <button className="ghost" id="login">Fazer login</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Ainda não tem conta?</h1>
                            <button className="ghost" id="register">Registra-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;