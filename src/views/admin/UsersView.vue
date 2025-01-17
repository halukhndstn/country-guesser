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
        <a href="/" id="logOut" class="logOut">Log Out</a>
      </nav>
    </div>
  </header>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Users
          <RouterLink to="/admin/user/add" class="btn float-end add-user-btn">
            Add User
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <div v-if="successMessage" class="alert alert-success" role="alert">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <div v-if="isLoading" class="text-center my-3">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <table class="table table-bordered" v-if="!isLoading">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>is Admin?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.password }}</td>
              <td>{{ user.isadmin }}</td>
              <td>
                <RouterLink :to="'/admin/user/edit/' + user.id" class="btn edit-btn">
                  Edit
                </RouterLink>
                <button type="button" @click="confirmDelete(user.id)" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-if="users.length === 0">
            <tr>
              <td colspan="5" class="text-center">No data available or loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      successMessage: "",
      errorMessage: "",
      isLoading: true,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        this.isLoading = true;
        const response = await axios.get('http://localhost:3300/users');
        this.users = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching users:', error);
        this.errorMessage = 'Error fetching users. Please try again later.';
        this.isLoading = false;
      }
    },
    async deleteUser(userID) {
      try {
        await axios.delete(`http://localhost:3300/users/${userID}`);
        this.successMessage = 'User successfully deleted.';
        this.getUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
        this.errorMessage = 'Error deleting user. Please try again later.';
      }
    },
    confirmDelete(userID) {
      if (confirm('Are you sure you want to delete this user?')) {
        this.deleteUser(userID);
      }
    },
    backToLoginPage() {
      window.location.href = '/';
    },
  },
};
</script>

<style>
.container {
  margin-top: 20px;
}
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
