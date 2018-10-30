<template>
  <div id="app">
    <top-bar />
    <router-view/>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style lang="sass">
@import './assets/sass/global.sass';

body
  background: $black;
  padding-top: 5em;

#app
  font-family: 'Source Sans Pro', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
  margin-top: 60px;
</style>
