<template>
  <div class="container-1">
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <input type="submit" value="Login" />
    </form>
    <div class="register-link">
      <p>Not a member? <a>Sign Up</a></p>
    </div>
    <button class="admin-button" @click="openAdminLogin">Admin Login</button>
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
    submitForm() {
      const loginData = {
        email: this.email,
        password: this.password
      };

      fetch('http://localhost/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
        .then(response => {
          if (response.ok) {
            window.location.href = '../index.html';
          } else {
            throw new Error('Invalid email or password');
          }
        })
        .catch(error => {
          console.error('Login Error:', error);
          alert('Login failed. Please check your email and password.');
        });
    },
    openAdminLogin() {
      window.location.href = './admin.html';
    }
  }
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

.container-1 {
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
.admin-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #154b6b;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
.admin-button:hover {
  background-color: #639f38;
}
.register-link a {
  color: #154b6b;
  text-decoration: underline;
}
.register-link p {
  text-align: center;
  color: black;
}
</style>
