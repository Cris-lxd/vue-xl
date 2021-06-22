<template>
  <div class="home_container">
      <navBar></navBar>
      <router-view></router-view>
  </div>
</template>

<script>
import navBar from './navBar/index.vue'
export default {
  components: {
    navBar
  },
  methods: {
  }
}
</script>

<style>
.home_container{
  display: flex;
  padding: 10px;
  background: green;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
