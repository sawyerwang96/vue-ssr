<template>
  <div>
    <input type="text" v-model="val">
    <p>val：{{val}}</p>
    <div class="btn" @click="handleClick">click</div>
  </div>
</template>

<script>
export default {
  name: 'customInput',
  data() {
    return {
      val: ''
    }
  },
  methods: {
    handleClick() {
      console.log(this.val);
    }
  }
}
</script>

<style scoped>
.btn {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: pink;
  color: black;
  font-size: 20px;
  font-weight: 600;
}
</style>