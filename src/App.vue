<template>
  <div id="app">
    <div>App</div>
    <router-link to="/">Home</router-link>
    <router-link to="/user">User</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import User from './components/User.vue'
export default {
  name: 'App',
  components: {
    User
  }
}
</script>

<style scoped>

</style>