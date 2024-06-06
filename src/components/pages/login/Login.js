import React, { useState } from 'react';
import styles from './Login.module.css';
import Input from '../../form/input/Input';

function Login({ onLoginSuccess }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);

    // Comparando a senha como string
    if (userName === 'war' && password === '123') {
      onLoginSuccess();
      console.log("Test", userName, password);
    } else {
      console.log("Test 1", userName, password);
      alert('User or password incorrect. Try again!');
    }
  };

  return (
    <div className={styles.login_container}>
      <h2>Login:</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <Input
            type="text"
            text="Name"
            name="Name"
            placeholder="Your name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName} // Certifique-se de passar o valor aqui
          />
          <Input
            type="password"
            text="Password"
            name="Password"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password} // Certifique-se de passar o valor aqui
          />
        </div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
