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
    <main>
      
        <div class="admin-panel">
            <h1>
      <a class="logo" id="reloadPage">
          <span>Country</span>Guesser
      </a>
      <hr>
    </h1>
        <div class="admin-header">
          <h1>Admin Panel</h1>
          <p>You can manage questions and users, and you can download quesiton's GeoJSON data.</p>
          <p></p>
        </div>
      </div>
    </main>
  </template>

  <script>
export default {
    methods: {
  async adminLogin() {
    const loginData = {
      email: this.email,
      password: this.password,
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
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      window.location.href = data.redirect;
    } catch (error) {
      console.error('Login Error:', error.message);

      if (error.message === 'You do not have permission for admin login.') {
        alert('You do not have permission for admin login.');
      } else {
        alert('Login failed. Please check your email and password.');
      }
    }
  },
  backToLoginPage() {
    window.location.href = '/';
  },
}
}
</script>
  
  
  <style scoped>
  .admin-panel {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .admin-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .admin-header h1 {
    font-size: 2em;
    color: #639f38;
  }
  
  .admin-header p {
    color: #6c757d;
  }
  
  </style>
  