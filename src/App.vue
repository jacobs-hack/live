<template>
  <div id="app">
    <top-bar />
    <div id="menu">
      <nav>
        <router-link :tag="'h1'" :to="{name: 'News'}">News</router-link>
        <router-link :tag="'h1'" :to="{name: 'You'}">You</router-link>
        <router-link :tag="'h1'" :to="{name: 'Schedule'}">Schedule</router-link>
      </nav>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/global.sass";

nav
  display: flex;
  justify-content: flex-start;
  border-sizing: border-box;
  padding-bottom: 1em;

  h1
    cursor: pointer;
    color: darken($white, 20%);
    transition: color 0.2s ease;

    &:hover
      color: $white;

    &.router-link-exact-active
      border-bottom: 5px solid $primary;
      color: $white;

    &:after
      content: "";
      opacity: 0;

    &.new-data
      &:after
        transition: opacity 1s ease;
        width: 0px;
        height: 0px;
        border: 4px solid $secondary;
        border-radius: 4px;
        position: relative;
        top: -16px;
        right: -8px;
        background-color: #BC9C1C;
        content: "";
        display: inline-block;
        opacity: 1;

    &:first-child
      margin-left: 0;

    margin: 0 0.5em;
    font-family: 'Source Code Pro';
    display: inline-block;
</style>

<style lang="sass">
@import './assets/sass/global.sass';

h1
  text-align: start;

body
  background: $black;
  padding-top: 4em;
  padding-left: 1em;
  padding-right: 1em;
  margin: 60px 0 0 0;

#app
  font-family: 'Source Sans Pro', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
</style>
