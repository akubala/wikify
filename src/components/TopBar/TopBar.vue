<template>
  <div class="bar">
    <v-autocomplete
      placeholder="Wyszukaj artystę"
      background-color="background"
      height="50"
      prepend-inner-icon="mdi-magnify"
      :items="items"
      :search-input.sync="searchInput"
      @change="onArtistChange"
      hide-no-data
      rounded
    />
  </div>
</template>
<script src="./TopBar.ts" lang="ts"></script>
<style scoped lang="scss" src="./TopBar.scss"></style>
