import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import AdminView from '../views/admin/AdminView.vue'
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
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: UsersView
    },
    {
      path: '/admin/user/add',
      name: 'add-user',
      component: AddUserView
    },
    {
      path: '/admin/user/edit/:id',
      name: 'edit-user',
      component: EditUserView
    },
    {
      path: '/admin/questions',
      name: 'questions',
      component: QuestionsView
    },
    {
      path: '/admin/question/add',
      name: 'add-question',
      component: AddQuestionView
    },
    {
      path: '/admin/question/edit/:id',
      name: 'edit-question',
      component: EditQuestionView
    },
  ],
})

export default router
