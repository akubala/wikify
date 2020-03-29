<template>
  <div>
    <TopBar @onArtistChange="onArtistChange"/>
    <div class="home">
      <Artist v-if="artist" :artist="artist" />
    </div>
  </div>
</template>
<script lang="ts" src="./Home.ts"></script>
<style scoped lang="scss" src="./Home.scss"></style>
