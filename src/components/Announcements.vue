<template>
  <div>
    <ul>
      <li v-for="announcement in announcements" :key="announcement.id">
        <span class="text">{{ announcement.text }}</span>
        <span class="date">{{ (announcement.created || {}).seconds | moment("dddd HH:mm") }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import db from '@/firebase.js'

export default {
  name: 'announcements',
  data: () => ({
    announcements: []
  }),
  firestore: {
    announcements: db.collection('announcements').orderBy('created', 'desc')
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/global.sass'

ul
  list-style: none;
  padding: 0;

  li
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: darken($white, 40%);

    &:nth-of-type(1)
      color: $white;
      margin-bottom: 2rem;

      .text
        font-size: 3rem;

    &:nth-of-type(2)
      color: darken($white, 20%);
      margin-bottom: 1.5rem;

      .text
        font-size: 2.5rem;

    span
      display: block;
      text-align: start;

    .date
      font-family: 'Source Code Pro';
      font-size: 1rem;
      white-space: nowrap;

    .text
      font-size: 2rem;
      text-align: start;

</style>
