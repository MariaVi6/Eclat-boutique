import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const containerRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const lgEmailRef = useRef(null);
  const lgPasswordRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const container = containerRef.current;

    const handleRegisterClick = () => {
      if (container) container.classList.add("right-panel-active");
    };

    const handleLoginClick = () => {
      if (container) container.classList.remove("right-panel-active");
    };

    const registerButton = document.getElementById("register");
    const loginButton = document.getElementById("login");

    registerButton.addEventListener("click", handleRegisterClick);
    loginButton.addEventListener("click", handleLoginClick);

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

  const validateRegisterForm = async (e) => {
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
      try {
        const response = await axios.post("http://localhost:3000/users", {
          name: username,
          email: email,
          password: password,
          remenberPwd: false,
        });

        if (response.status === 201) {
          alert("Sign up successful!");
          localStorage.setItem("user-info", JSON.stringify(response.data));
          navigate('/'); // Redirect to home
        }
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  const validateLoginForm = async (e) => {
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
      try {
        const response = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`);

        if (response.data.length > 0) {
          alert("Login successful!");
          localStorage.setItem("user-info", JSON.stringify(response.data[0]));
          console.log("Redirecionando para a home..."); // For debugging
          navigate('/'); // Redirect to home after successful login
        } else {
          alert("Invalid credentials!");
        }
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <div className="body">
      <div className="container" ref={containerRef}>
        {/* Register form */}
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
            <button type="submit">Registrar</button>
          </form>
        </div>

        {/* Login form */}
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
            <button type="submit">Fazer login</button>
          </form>
        </div>

        {/* Overlay */}
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
