
import { createStore } from 'vuex';
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();
import axios from 'axios';
import router from "../router/index";
const usersURL='https://jsonplaceholder.typicode.com/'; 

export default createStore({
  state: {
    users: null
  },

  getters: {
    users(state){
      return state.users
    }
  },

  mutations: {
    setUsers(state, users){
      state.users = users
    }
  },


  actions: {
    async fetchUsers (context){
      const res= await axios.get(`${usersURL}users`);
      if (res.data){
        context.commit('setUsers', res.data)
      } else {
        context.commit('setMessage', 'An error occurred')
      }
  }
  },
  modules: {
  }
})
