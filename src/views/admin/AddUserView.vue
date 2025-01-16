<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="d-flex">
            <RouterLink class="navbar-brand me-4" to="/admin/questions">Questions</RouterLink>
            <RouterLink class="navbar-brand" to="/admin/users">Users</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>Add User</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="username">Username</label>
          <input type="text" v-model="model.username" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="email">Email</label>
          <input type="email" v-model="model.email" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input type="password" v-model="model.password" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="isadmin">Is Admin?</label>
          <select v-model="model.isadmin" class="form-control">
            <option :value="true">true</option>
            <option :value="false">false</option>
          </select>
        </div>
        <div class="mb-3">
          <button
            type="button"
            @click="saveUser"
            class="btn custom-save-btn"
          >
            Save
          </button>
        </div>
      </div>
    </div>

    <div v-if="showSuccessMessage" class="alert alert-success mt-3">
      User successfully added!
    </div>
    <div v-if="showErrorMessage" class="alert alert-danger mt-3">
      Failed to add user: {{ errorMessage }}
    </div>
  </div>
  <button class="back-button" @click="backToLoginPage">Back to Login Page</button>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserAdd',
  data() {
    return {
      model: {
        username: '',
        email: '',
        password: '',
        isadmin: false,
      },
      showSuccessMessage: false,
      showErrorMessage: false,
      errorMessage: '',
    };
  },
  methods: {
    saveUser() {
      axios
        .post('http://localhost:3300/users', this.model)
        .then((res) => {
          console.log('User added:', res.data);
          this.showSuccessMessage = true;
          this.showErrorMessage = false;
          this.model = {
            username: '',
            email: '',
            password: '',
            isadmin: false,
          };
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        })
        .catch((error) => {
          console.error('Error adding user:', error);
          this.showErrorMessage = true;
          this.showSuccessMessage = false;
          this.errorMessage = error.response?.data?.error || 'An unexpected error occurred.';
          setTimeout(() => {
            this.showErrorMessage = false;
          }, 5000);
        });
    },
  },
  backToLoginPage() {
      window.location.href = '/';
    }
};
</script>
