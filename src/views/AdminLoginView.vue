<template>
    <div class="container-1">
      <h2>Admin Girişi</h2>
      <form @submit.prevent="adminLogin">
        <div class="form-group">
          <label for="email">E-posta:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Şifre:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async adminLogin() {
        const loginData = {
          email: this.email,
          password: this.password
        };
  
        try {
          const response = await fetch('http://localhost:3300/adminlogin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
          });
  
          if (!response.ok) {
            throw new Error(response.statusText);
          }
  
          const data = await response.json();
          window.location.href = data.redirect;
        } catch (error) {
          console.error('Login Error:', error.message);
  
          if (error.message.includes('permissions')) {
            alert('You do not have permission for admin login.');
          } else {
            alert('Login failed. Please check your email and password.');
          }
        }
      }
    }
  };
  </script>
  
  <style>
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .container-1 {
    position: relative;
    width: 350px;
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #639f38;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #333;
  }
  
  input[type="email"],
  input[type="password"] {
    width: calc(100% - 10px);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: border-color 0.3s ease-in-out;
  }
  
  input[type="email"]:focus,
  input[type="password"]:focus {
    border-color: #639f38;
  }
  
  button {
    background-color: #639f38;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  button:hover {
    background-color: #154b6b;
  }
  </style>
  