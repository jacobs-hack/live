<script>
export default {
  name: 'topbar'
}
</script>

<template>
  <div id='topbar'>
    <div id='left'>
      <slot name="left">
        <img src="../assets/separator.png" id="logo"/>
      </slot>
    </div>
    <div id='center'>
      <slot name='center'>
        <h1>jacobsHack.live</h1>
      </slot>
    </div>
    <div id="right">
      <slot name="right">
        <h2 class="timer" title="Hacking time to go">12h 15m remaining</h2>
      </slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/global.sass'

#topbar
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba($black, .3);
  height: 4em;

  padding-left: 1em;
  padding-right: 1em;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;

  div
    height: 100%;
    display: flex;
    flex: 1;

  #left
    justify-content: flex-start;

  #center
    justify-content: center;

  #right
    justify-content: flex-end;
    text-align: right;

  h1, h2, h3, h4, h5, h6
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  img
    height: 100%;

  .timer
    font-family: 'Source Code Pro';

</style>
