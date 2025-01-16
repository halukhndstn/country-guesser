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
          <label for="question">Question</label>
          <input type="text" v-model="model.qtext" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="answer">Answer</label>
          <input type="text" v-model="model.answer" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="latiude">Latitude of Capital</label>
          <input type="text" v-model="model.latitude" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="longitude">Longitude of Capital</label>
          <input type="text" v-model="model.longitude" class="form-control" />
        </div>
        <div class="mb-3">
          <button type="button" @click="saveQuestion" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
    <div v-if="showSuccessMessage" class="alert alert-success mt-3">
      Question successfully added!
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'QuestionAdd',
  data() {
    return {
      model: {
        qtext: '',
        answer: '',
      },
      showSuccessMessage: false,
    };
  },
  methods: {
    saveQuestion() {
      axios
        .post('http://localhost:3300/questions', this.model)
        .then((res) => {
          console.log(res.data);
          this.showSuccessMessage = true;
          this.model = {
            qtext: '',
            answer: '',
          };
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        })
        .catch((error) => {
          console.error('Question add error:', error);
        });
    },
  },
};
</script>
