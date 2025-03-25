<template>
  <my-header />
  <home-page />
</template>

<script>
import MyHeader from './widget/header/MyHeader.vue';

import HomePage from './pages/home/HomePage.vue';

export default {
  name: 'App',
  components: {
   HomePage,
    MyHeader
  }
}
</script>

<style>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
