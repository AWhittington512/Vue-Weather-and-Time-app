<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <div><!--  starts here  -->
    <NavBar />
    <router-view />
  </div> <!--end here-->

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//starts here
import NavBar from './components/NavBar.vue'; 

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavBar

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- <template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from './components/NavbBar.vue';

export default {
  name: 'App',
  components: {
  NavBar
  }
};
</script> -->