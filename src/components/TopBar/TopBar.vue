<template>
  <div class="bar">
    <v-autocomplete
      class="autocomplete"
      placeholder="Wyszukaj artystę"
      background-color="background"
      height="50"
      v-model="artist"
      :search-input.sync="searchInput"
      :items="items"
      hide-no-data
      rounded
    />
  </div>
</template>
<script src="./TopBar.ts" lang="ts"></script>
<style scoped lang="scss" src="./TopBar.scss"></style>
