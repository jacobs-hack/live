<template>
  <div class="event" :style="{minHeight: height}" :class="evClass">
    <div class="details">
      <h3 class="title">{{ event.title}}</h3>
      <p class="desc">{{ event.description }}</p>
    </div>
    <div class="timings">
      <span class="startsin">{{ startsin }}</span>
      <span class="duration">{{ duration }}</span>
    </div>
  </div>
</template>


<style lang="sass" scoped>
@import "@/assets/sass/global.sass";

div.event
  padding: 1em;
  margin-bottom: 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: start;

  &.highlight
    background-color: $secondary;
    border-color: $secondary;
    animation: fade-animation 1s ease alternate infinite;

  @keyframes fade-animation
    from
      background-color: $secondary;
      border-color: $secondary;

    to
      background-color: darken($secondary, 20%);
      border-color: darken($secondary, 20%);

  h3
    margin: 0;

  div.timings
    font-family: 'Source Code Pro';
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

  border: 1px solid $text;
  border-radius: 0 0 4px 4px;

</style>


<script>
import moment from 'moment';

function hasTimes(event) {
  return event && event.ends && event.starts;
}

export default {
  name: 'Event',
  props: {
    event: Object,
    now: Number
  },
  computed: {
    height: function () {
      // 4 times the duration in minutes as pixels
      return Math.max(((this.event.ends.seconds - this.event.starts.seconds) / 60) * 4, 64) + "px"
    },
    duration: function () {
      return moment(this.event.starts.seconds * 1000).to(this.event.ends.seconds * 1000, true)
    },
    startsin: function () {
      const s = moment(this.event.starts.seconds * 1000)
      const e = moment(this.event.ends.seconds * 1000)

      if(s.isBefore(this.now) && e.isAfter(this.now)) {
        return 'has started'
      } else if(e.isBefore(this.now)) {
        return 'has ended'
      } else {
        return s.format('ddd HH:mm')
      }
    },
    evClass: function () {
      if((this.now > (this.event.starts.seconds * 1000 - 600)) && ((this.now < (this.event.ends.seconds * 1000 + 600)))) {
        return {
          'highlight': true
        }
      }

      return {}
    }
  }
}
</script>