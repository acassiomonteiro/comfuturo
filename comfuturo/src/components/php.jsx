import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    fetch('/backend/register.php', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleLogin = () => {
    fetch('/backend/login.php', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };


export default App;
