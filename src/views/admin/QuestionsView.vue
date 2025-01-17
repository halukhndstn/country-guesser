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
          Questions
          <RouterLink to="/admin/question/add" class="btn float-end add-question-btn">
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
              <th>Latitude of Capital</th>
              <th>Longitude of Capital</th>
              <th>Geom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(question, index) in questions" :key="index">
              <td>{{ question.id }}</td>
              <td>{{ question.qtext }}</td>
              <td>{{ question.answer }}</td>
              <td>{{ question.latitude }}</td>
              <td>{{ question.longitude }}</td>
              <td>{{ question.geom }}</td>
              <td>
                <RouterLink :to="'question/edit/' + question.id" class="btn edit-btn">
                  Edit
                </RouterLink>
                <button type="button" @click="confirmDelete(question.id)" class="btn btn-danger">
                  Delete
                </button>
                <button type="button" @click="downloadGeoJSON(question)" class="btn geojson-btn">
                  GeoJSON File
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-if="questions.length === 0">
            <tr>
              <td colspan="7">No data available or loading...</td>
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
    async getQuestions() {
      axios.get('http://localhost:3300/questions').then(res => {
        this.questions = res.data;
      });
    },
    async deleteQuestion(questionID) {
      axios.delete(`http://localhost:3300/questions/${questionID}`)
        .then(res => {
          this.successMessage = 'Question successfully deleted.';
          this.getQuestions();
        })
        .catch(error => {
          console.error('Error deleting question:', error);
          this.successMessage = 'Error deleting question.';
        });
    },
    confirmDelete(questionID) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.deleteQuestion(questionID);
      }
    },
    downloadGeoJSON(question) {
      const geoJSON = {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [parseFloat(question.longitude), parseFloat(question.latitude)],
        },
        properties: {
          id: question.id,
          question: question.qtext,
          answer: question.answer,
        },
      };

      const blob = new Blob([JSON.stringify(geoJSON, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `question_${question.id}.geojson`;
      a.click();
      URL.revokeObjectURL(url);
    },
    backToLoginPage() {
      window.location.href = '/';
    }
  },
};
</script>
