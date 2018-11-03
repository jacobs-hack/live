<template>
  <div id="schedule">
    <div class="track" v-for="track in tracks" :key="track">
      <h2>{{ track }}</h2>
      <event v-for="event in events.filter(event => event.track === track)" :key="track +  ':' + event.title" :event="event" :now="now" />
    </div>
  </div>
</template>

<script>
import Event from '@/components/Event'
import db from '@/firebase.js'

export default {
  name: 'Schedule',
  components: {
    Event
  },
  firestore: {
    events: db.collection('events').orderBy('starts')
  },
  data: () => ({
    events: [],
    now: new Date().valueOf()
  }),

  computed: {
    tracks: function () {
      return [...new Set(this.events.map(event => event.track))]
    }
  },
  created () {
    setTimeout(() => (this.now = new Date().valueOf()), 1000 * 30)
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/global.sass";

#schedule
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  div.track
    flex: 1;
    margin: 0 0.5em;

    h2
      text-align: start;

    &:first-child
      margin-left: 0;

    &:last-child
      margin-right: 0;
</style>
