import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import UsersView from '../views/admin/UsersView.vue'
import AddUserView from '../views/admin/AddUserView.vue'
import EditUserView from '../views/admin/EditUserView.vue'
import QuestionsView from '../views/admin/QuestionsView.vue'
import AddQuestionView from '../views/admin/AddQuestionView.vue'
import EditQuestionView from '../views/admin/EditQuestionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: HomeView,
    },
    {
      path: '/admin-login',
      name: 'admin-login',
      component: AdminLoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/play',
      name: 'game',
      component: () => window.location.href = '../public/index.html',
    },
    {
      path: '/admin/users',
      name: 'admin',
      component: UsersView
    },
    {
      path: '/admin/users/add',
      name: 'add-user',
      component: AddUserView
    },
    {
      path: '/admin/users/edit/:id',
      name: 'edit-user',
      component: EditUserView
    },
    {
      path: '/admin/questions',
      name: 'questions',
      component: QuestionsView
    },
    {
      path: '/admin/questions/add',
      name: 'add-question',
      component: AddQuestionView
    },
    {
      path: '/admin/questions/edit/:id',
      name: 'edit-question',
      component: EditQuestionView
    },
  ],
})

export default router
