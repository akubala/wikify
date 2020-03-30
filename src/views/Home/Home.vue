<template>
  <div>
    <top-bar @onArtistChange="onArtistChange"/>
    <div class="home">
      <artist v-if="artist" :artist="artist" />
    </div>
  </div>
</template>
<script lang="ts" src="./Home.ts"></script>
