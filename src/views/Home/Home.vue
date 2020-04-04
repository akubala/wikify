<template>
  <div>
    <top-bar @onArtistChange="onArtistChange" />
    <div class="home">
      <artist v-if="artist" :artist="artist" />
    </div>
    <div class="header">
      <h1>Know your music!</h1>
      <h4>Have you ever wanted to automatically listen to your favourite music and at the same time find useful info about the author?</h4>
      <h4>We neither, but now you can do this!</h4>
    </div>
  </div>
</template>
<script lang="ts" src="./Home.ts"></script>
