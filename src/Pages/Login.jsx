import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './FirebaseConfig'; 
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const containerRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);   
    const lgEmailRef = useRef(null);
    const lgPasswordRef = useRef(null);
    const navigate = useNavigate();

    const [generalError, setGeneralError] = useState('');
    const [createUserWithEmailAndPassword, , registerLoading, registerError] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword, , loginLoading, loginError] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        const container = containerRef.current;
        const registerButton = document.getElementById("register");
        const loginButton = document.getElementById("login");

        const handleRegisterClick = () => container && container.classList.add("right-panel-active");
        const handleLoginClick = () => container && container.classList.remove("right-panel-active");

        registerButton.addEventListener("click", handleRegisterClick);
        loginButton.addEventListener("click", handleLoginClick);

        return () => {
            registerButton.removeEventListener("click", handleRegisterClick);
            loginButton.removeEventListener("click", handleLoginClick);
        };
    }, []);

    const validateRegisterForm = async (e) => {
        e.preventDefault();
        setGeneralError('');
        const username = usernameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        let valid = true;

        if (username.length < 4) {
            showError(usernameRef, "*Username must be at least 4 characters.");
            valid = false;
        } else {
            showSuccess(usernameRef);
        }

        if (!checkEmail(email)) {
            showError(emailRef, "*Email is not valid.");
            valid = false;
        } else {
            showSuccess(emailRef);
        }

        if (password.length < 8) {
            showError(passwordRef, "*Password must be at least 8 characters.");
            valid = false;
        } else {
            showSuccess(passwordRef);
        }

        if (valid) {
            try {
                await createUserWithEmailAndPassword(email, password);
                navigate('/');
            } catch (error) {
                console.error("Error during registration:", error);
                setGeneralError(registerError?.message || "Registration failed. Please try again.");
            }
        }
    };

    const validateLoginForm = async (e) => {
        e.preventDefault();
        setGeneralError('');
        const email = lgEmailRef.current.value.trim();
        const password = lgPasswordRef.current.value.trim();

        if (!checkEmail(email)) {
            showError(lgEmailRef, "*Email is not valid.");
            return;
        } else {
            showSuccess(lgEmailRef);
        }

        if (password.length < 8) {
            showError(lgPasswordRef, "*Password must be at least 8 characters.");
            return;
        } else {
            showSuccess(lgPasswordRef);
        }
        try {
            await signInWithEmailAndPassword(email, password);
            navigate('/');
        } catch (error) {
            console.error("Error during login:", error);
            setGeneralError(loginError?.message || "Login failed. Please check your credentials.");
        }
    };

    const showError = (input, message) => {
        const formControl = input.current.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    };

    const showSuccess = (input) => {
        const formControl = input.current.parentElement;
        formControl.className = 'form-control success';
        const small = formControl.querySelector('small');
        small.innerText = '';
    };

    const checkEmail = (email) => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
    };

    return (

        <div className="body">
        <div className="container" ref={containerRef}>

                {/* LOGIN */}
                
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
                        <button type="submit" className='botao-register' disabled={registerLoading}>
                            {registerLoading ? "Registering..." : "Registrar"}
                        </button>
                        {registerError && <small className="error">{registerError.message}</small>}
                        <span className="subtitulo-botao-register">ou use sua conta</span>

                        <div className="social-container">
                            <div className="facebook-login"></div>
                            <div className="google-login"></div>
                            <div className="email-login"></div>
                        </div>
                    </form>
                </div>
                {/* LOGIN */}
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
                        <button type="submit" className='botao-login' disabled={loginLoading}>
                            {loginLoading ? "Logging in..." : "Fazer login"}
                        </button>
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
            {generalError && <small className="error">{generalError}</small>}
        </div>
    );
};

export default Login;
