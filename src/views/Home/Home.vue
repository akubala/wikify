<template>
  <div>
    <top-bar v-if="spotifyIsLogged" @onArtistChange="onArtistChange" />
    <div class="home">
      <artist v-if="artist" :artist="artist" />
    </div>
    <div v-if="!artist">
      <welcome :tokenExist="spotifyIsLogged" />
      <welcome-footer v-if="spotifyIsLogged"/>
    </div>
  </div>
</template>
<script lang="ts" src="./Home.ts"></script>
