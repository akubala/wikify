<template>
  <div>
    <top-bar v-if="spotifyIsLogged" @onArtistChange="onArtistChange" />
    <artist v-if="artist" :artist="artist" />
    <welcome v-else :spotifyIsLogged="spotifyIsLogged" />
  </div>
</template>
<script lang="ts" src="./Home.ts"></script>
