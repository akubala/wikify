<template>
  <div>
    <TopBar @onArtistChange="onArtistChange"/>
    <div class="home">
      <img alt="Vue logo" src="@/assets/logo.png">
      <h1>Hello {{artist.name}}!</h1>
    </div>
  </div>
</template>
<script lang="ts" src="./Home.ts"></script>
<style scoped lang="scss" src="./Home.scss"></style>
