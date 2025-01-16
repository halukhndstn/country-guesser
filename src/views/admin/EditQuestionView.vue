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
        <h4>Edit Question</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="question">Question</label>
          <input type="text" v-model="model.qtext" id="qtext" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="answer">Answer</label>
          <input type="text" v-model="model.answer" id="answer" class="form-control" />
        </div>
        <div class="mb-3">
          <button type="button" @click="updateQuestion" class="btn btn-primary">Save</button>
        </div>
        <div v-if="successMessage" class="alert alert-success">
          {{ successMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'QuestionEdit',
  data() {
    return {
      questionID: "",
      model: {
        id: "",
        qtext: "",
        answer: "",
      },
      successMessage: "",
    };
  },

  mounted() {
    this.questionID = this.$route.params.id;
    this.getQuestionData(this.questionID);
  },

  methods: {
    getQuestionData(questionID) {
      axios.get(`http://localhost:3300/questions/${questionID}`)
        .then(res => {
          if (res.data) {
            this.model.id = res.data.id;
            this.model.qtext = res.data.qtext;
            this.model.answer = res.data.answer;
          }
        })
        .catch(error => {
          console.error('Error fetching question data:', error);
        });
    },

    updateQuestion() {
      if (!this.questionID) {
        console.error('Question ID is undefined.');
        return;
      }

      axios.put(`http://localhost:3300/questions/${this.questionID}`, this.model)
        .then(res => {
          console.log('Question updated successfully:', res.data);
          this.successMessage = 'Question successfully updated.';
        })
        .catch(error => {
          console.error('Question update error:', error);
          this.successMessage = 'Error updating question.';
        });
    },
  },
};
</script>
