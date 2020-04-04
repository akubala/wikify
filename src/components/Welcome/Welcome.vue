<template>
  <div>
    <div class="header">
      <h1>Know your music!</h1>
      <br />
      <img src="@/assets/logo-transparent-full.png" alt="WikiFy main logo" />
      <h4>Have you ever wanted to automatically listen to your favourite music and at the same time find useful info about the author?</h4>
      <h3>We neither, but now you can do this!</h3>
    </div>
    <v-divider />
    <div class="top-artists">
      <div class="artist">
        <v-avatar size="100" :title="artist.name" v-for="artist in topArtists" v-bind:key="artist.name">
          <img :src="artist.images[0].url" />
        </v-avatar>
      </div>
    </div>
  </div>
</template>
<script src="./Welcome.ts" lang="ts"></script>
<style scoped lang="scss" src="./Welcome.scss"></style>