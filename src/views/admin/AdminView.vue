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
      <button class="back-button" @click="backToLoginPage">Back to Login Page</button>
    </main>
  </template>

  <script>
export default {
  methods: {
    backToLoginPage() {
      window.location.href = '/';
    }
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
  