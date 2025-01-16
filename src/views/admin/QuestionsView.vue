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
        <h4>
          Questions
          <RouterLink to="/admin/question/add" class="btn btn-primary float-end">
            Add Question
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <div v-if="successMessage" class="alert alert-success" role="alert">
          {{ successMessage }}
        </div>
        
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Question Text</th>
              <th>Answer</th>
              <th>Latiude of Capital</th>
              <th>Latiude of Capital</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(question, index) in questions" :key="index">
              <td>{{ question.id }}</td>
              <td>{{ question.qtext }}</td>
              <td>{{ question.answer }}</td>
              <td>{{ question.lat }}</td>
              <td>{{ question.lon }}</td>
              <td>
                <RouterLink :to="'question/edit/' + question.id" class="btn btn-success">
                  Edit
                </RouterLink>
                <button type="button" @click="deleteQuestion(question.id)" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-if="questions.length === 0">
            <tr>
              <td colspan="4">No data available or loading...</td>
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
  name: 'Questions',
  data() {
    return {
      questions: [],
      successMessage: "",
    };
  },
  mounted() {
    this.getQuestions();
  },
  methods: {
    getQuestions() {
      axios.get('http://localhost:3300/questions').then(res => {
        this.questions = res.data;
      });
    },
    deleteQuestion(questionID) {
      axios.delete(`http://localhost:3300/questions/${questionID}`)
        .then(res => {
          this.successMessage = 'Question successfully deleted.';
          this.getQuestions();
        })
        .catch(error => {
          console.error('Error deleting question:', error);
          this.successMessage = 'Error deleting question.';
        });
    }
  }
};
</script>
