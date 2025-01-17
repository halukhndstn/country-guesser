<template>
  <h1>
    <a class="logo" id="reloadPage" href="/register">
      <span>Country</span>Guesser
    </a>
  </h1>
  <div class="container-1">
    <h2>Sign Up</h2>
    <form id="registrationForm" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">User Name:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <input type="submit" value="Sign Up" />
    </form>
  </div>
  <button class="back-button" @click="backToLoginPage">Back to Login Page</button>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      fetch('http://localhost:3300/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to register user');
          }
          return response.json();
        })
        .then((data) => {
          alert('Registration completed successfully.');
          window.location.href = '/';
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred during registration. Please try again.');
        });
    },
    backToLoginPage() {
      window.location.href = '/';
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  list-style: none;
}
body {
  background-color: #F5F5F5;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #639f38;
}
span {
  color: #154b6b;
  font-weight: 600;
}
.logo {
  font-size: 25px;
  color: #639f38;
  font-weight: 600;
}
.container-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  color: #154b6b;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: calc(100% - 10px);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease-in-out;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #639f38;
}
input[type="submit"] {
  background-color: #639f38;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
input[type="submit"]:hover {
  background-color: #154b6b;
}
</style>
