<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style>
  #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-weight: normal;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #F5F5F5;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px;
  }

  .card {
    margin-top: 20px;
  }

  .navbar {
    width: 100%;
  }

  header {
    width: 100%;
  }

  .navbar {
  background-color: #154b6b !important;
  color: #ffffff;
  height: 70px;
}

.navbar a {
  color: #ffffff !important;
}

.add-question-btn {
  background-color: #154b6b;
  color: white;
  border: none;
}

.add-question-btn:hover {
  background-color: #123b58; 
  color: white;
}

.edit-btn {
  background-color: #639f38;
  color: white;
  border: none;
}

.edit-btn:hover {
  background-color: #527d2f; 
  color: white;
}

.geojson-btn {
  background-color: #fea501;
  color: white;
  border: none;
}

.geojson-btn:hover {
  background-color: #c07d02; 
  color: white;
}

.add-user-btn {
  background-color: #154b6b;
  color: white;
  border: none;
}

.add-user-btn:hover {
  background-color: #123b58; 
  color: white;
}

.edit-btn {
  background-color: #639f38;
  color: white;
  border: none;
}

.edit-btn:hover {
  background-color: #527d2f; 
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333; 
  color: white;
}
.custom-save-btn {
  background-color: #639f38;
  color: white;
  border: none;
}

.custom-save-btn:hover {
  background-color: #4a7528;
  color: white;
  cursor: pointer;
}

.logOut {
    position: absolute;
    top: 50%; 
    right: 80px; 
    transform: translateY(-50%);
    padding: 10px 28px;
    background-color: #639f38;
    color: white;
    border: 2px solid transparent;
    border-radius: 8px;
    font-size: 19px;
    letter-spacing: 1px;
    font-weight: 600;
    transition: 0.3s ease;
    margin-left: auto;
    text-decoration: none;
    z-index:1;
}

.logOut:hover {
    box-shadow: 0 0 25px #4a7528;
    color: white !important;
}


</style>