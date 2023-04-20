<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  
  </div>
  <div class="user-cards">
  <div class="col-3">
    <div class="card"  v-for="user in users"
        :key="user.id">
      <div class="header">Name</div>
      <h4 class="name">{{ user.name }}</h4>
      <div class="body">Email</div>
      <p class="email">{{ user.email}}</p>
    </div>
  </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchUsers");
    const users = computed(() => store.state.users);
    return {
      users,
    };
  },
}
</script>

<style scoped>
 .card {
  border: 1px solid grey;
  width: 300px;
  margin-top: 20px;
  margin-right: 20px;
 }

 .header, .body {
  border: px solid grey;
  box-shadow: 0 0 5px;
 }

 .user-cards {
  
  
 }

</style>