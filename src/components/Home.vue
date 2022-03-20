<template>
  <div>
    <h1>HOME</h1>
    <h3>Welcome, {{ name }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['name'])
  },
  created() {
    this.$store.dispatch('getName')
  },
  asyncData(store) {
    return store.dispatch('getName')
  }
}
</script>