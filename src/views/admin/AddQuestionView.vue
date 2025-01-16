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
          <h4>Add Question</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="">ID</label>
            <input type="text" v-model="model.id" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="">Question</label>
            <input type="text" v-model="model.cafe_name" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="">Answer</label>
            <input type="text" v-model="model.cafe_lat" class="form-control" />
          </div>   
          <div class="mb-3">
            <button type="button" @click="saveCafes" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
      <div v-if="showSuccessMessage" class="alert alert-success mt-3">
        Cafe successfully added!
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CafeAdd',
    data() {
      return {
        model: {
          id: '',
          cafe_name: '',
          cafe_lat: '',
          cafe_lon: '',
          cafe_desc: '',
        },
        showSuccessMessage: false,
      };
    },
    methods: {
      saveCafes() {
        axios
          .post('http://localhost:3300/cafes', this.model)
          .then((res) => {
            console.log(res.data);
            this.showSuccessMessage = true;
            this.model = {
              id: '',
              cafe_name: '',
              cafe_lat: '',
              cafe_lon: '',
              cafe_desc: '',
            };
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3000);
          })
          .catch((error) => {
            console.error('Cafe add error:', error);
          });
      },
    },
  };
  </script>