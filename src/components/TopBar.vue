<script>
import db from '@/firebase'
import moment from 'moment'

export default {
  name: 'topbar',
  data: () => ({
    timer: null,
    currentTime: null
  }),
  firestore: {
    timer: db.collection('timer').doc('OBBHkVUBfVam84gw55iU')
  },
  computed: {
    humanTimer: function () {
      const endTime = (this.timer || {}).expires
      const endSecs = (endTime || {}).seconds
      const endMillis = endSecs * 1000

      const startTime = (this.timer || {}).starts
      const startSecs = (startTime || {}).seconds
      const startMillis = startSecs * 1000

      if (!this.currentTime) {
        return ''
      }

      if (this.currentTime < startMillis) {
        return 'Hacking starts ' + moment(this.currentTime).to(startMillis)
      } else if (this.currentTime < endMillis) {
        return 'Hacking ends ' + moment(this.currentTime).to(endMillis)
      } else {
        return 'Hacking ended ' + moment(this.currentTime).to(endMillis)
      }
    }
  },
  created () {
    setInterval(() => this.currentTime = new Date().valueOf(), 1000 * 1)
  }
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
        <h2 class="timer" title="Hacking time to go">{{ humanTimer }}</h2>
      </slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/global.sass'

#topbar
  font-family: 'Source Sans Pro';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba($base, .3);
  height: 4em;

  padding-left: 1rem;
  padding-right: 1rem;

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
