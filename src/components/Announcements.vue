<template>
  <div>
    <h1>Announcements</h1>
    <ul>
      <li v-for="announcement in announcements.slice().reverse()" :key="announcement.id">
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
    announcements: db.collection('announcements')
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/global.sass'

div
  margin: 1em;

h1
  font-family: 'Source Code Pro';
  text-align: start;

ul
  list-style: none;
  padding: 0;

  li
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

    .date
      font-family: 'Source Code Pro';
      font-size: 1rem;
      float: right;
      white-space: nowrap;
      align-self: flex-end;

    .text
      font-size: 2rem;
      text-align: start;

</style>
