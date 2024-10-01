import React, { useEffect, useRef } from 'react';
const Login = () => {
    
        const containerRef = useRef(null);
        const usernameRef = useRef(null);
        const emailRef = useRef(null);
        const passwordRef = useRef(null);
        const lgEmailRef = useRef(null);
        const lgPasswordRef = useRef(null);
    
        useEffect(() => {
        const container = containerRef.current;
    
        const handleRegisterClick = () => {
        if (container) {
            container.classList.add("right-panel-active");
        }
        };
    
        const handleLoginClick = () => {
        if (container) {
            container.classList.remove("right-panel-active");
        }
        };
    
        // Adicionando event listeners
        const registerButton = document.getElementById("register");
        const loginButton = document.getElementById("login");
        
        registerButton.addEventListener("click", handleRegisterClick);
        loginButton.addEventListener("click", handleLoginClick);
    
        // Removendo event listeners
        return () => {
            registerButton.removeEventListener("click", handleRegisterClick);
            loginButton.removeEventListener("click", handleLoginClick);
        };
    }, []);
    
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
    
    const validateRegisterForm = (e) => {
        e.preventDefault();
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
          // Submit the form or do something
        console.log("Register form is valid.");
        }
    };
    
    const validateLoginForm = (e) => {
        e.preventDefault();
        const email = lgEmailRef.current.value.trim();
        const password = lgPasswordRef.current.value.trim();
        
        let valid = true;
    
        if (!checkEmail(email)) {
        showError(lgEmailRef, "*Email is not valid.");
        valid = false;
        } else {
        showSuccess(lgEmailRef);
        }
    
        if (password.length < 8) {
        showError(lgPasswordRef, "*Password must be at least 8 characters.");
        valid = false;
        } else {
        showSuccess(lgPasswordRef);
        }
    
        if (valid) {
          // Submit the form or do something
        console.log("Login form is valid.");
        }
    };
    
    return (
        <div className="body">

        <div className="container" ref={containerRef}>

        <div className="form-container register-container">

            <form onSubmit={validateRegisterForm}>
            <h1 className="titulo-register">Registre-se aqui</h1>

            <div className="form-control">
                <input className='nome-register' type="text" id="username" placeholder="Nome" ref={usernameRef} />
                <small id="username-error"></small>
            </div>

            <div className="form-control">
                <input className='email-register' type="email" id="email" placeholder="Email" ref={emailRef} />
                <small id="email-error"></small>
            </div>

            <div className="form-control">
                <input className='passaword-register' type="password" id="password" placeholder="Senha" ref={passwordRef} />
                <small id="password-error"></small>
            </div>

            <button type="submit" className="botao-login">Registrar</button>
                <span className="subtitulo-botao-login">ou use sua conta</span>

            <div className="social-container">

            <div className="facebook-login"></div>

            <div className="google-login"></div>

            <div className="email-login"></div>

            </div>

            </form>

            </div>
    
            <div className="form-container login-container">
                <form onSubmit={validateLoginForm}>
                <h1 className="titulo-login">Faça login aqui</h1>

            <div className="form-control">
                <input type="email" className="email-2" placeholder="Email" ref={lgEmailRef} />
                <small className="email-error-2"></small>
            </div>

            <div className="form-control">
                <input type="password" className="password-2" placeholder="Senha" ref={lgPasswordRef} />
                <small className="password-error-2"></small>
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

            <button type="submit" className="botao-login">Fazer login</button>
                <span className="subtitulo-botao-login">ou use sua conta</span>
                
            <div className="social-container">

            <div className="facebook-login"></div>
            <div className="google-login"></div>
            <div className="email-login"></div>
                
            </div>

            </form>

            </div>
    
            {/* OVERLAY */}
            <div className="overlay-container">

            <div className="overlay">

            <div className="overlay-panel overlay-left">
                <h1 className="titulo-register">Já tem conta?</h1>
                <button className="ghost" id="login">Fazer login</button>
            </div>

            <div className="overlay-panel overlay-right">
                <h1 className="titulo-overlay">Ainda não tem conta?</h1>
                <button className="ghost" id="register">Registra-se</button>
            </div>
            
            </div>

            </div>

            </div>

            </div>

    );
};

export default Login;