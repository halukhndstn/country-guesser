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
  background-color: #639f38 !important;
  color: #ffffff;
}

.navbar a {
  color: #ffffff !important;
}

.navbar a:hover {
  color: #FFD700 !important; 
}
</style>