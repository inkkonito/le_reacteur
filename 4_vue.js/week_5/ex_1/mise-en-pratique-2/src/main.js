import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const userInfos = ref({
  gender: 'female',
  firstname: 'Sophia',
  lastname: 'Rodriguez',
  age: 31,
  job: 'environmental scientist',
})

const editUserInfos = (newInfo) => {
  if (newInfo.firstname) {
    userInfos.value.firstname = newInfo.firstname
  }
  if (newInfo.lastname) {
    userInfos.value.lastname = newInfo.lastname
  }
  if (newInfo.job) {
    userInfos.value.job = newInfo.job
  }
  if (newInfo.age) {
    userInfos.value.age = newInfo.age
  }
}
app.provide('GlobalStore', { userInfos: userInfos, editUserInfos: editUserInfos })

app.mount('#app')
