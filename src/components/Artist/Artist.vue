<template>
  <div>
    <v-avatar size="160" v-if="imageSrc">
      <img :src="imageSrc">
    </v-avatar>
    <h2 class="name">{{name}}</h2>
  </div>
</template>
<script src="./Artist.ts" lang="ts"></script>
<style scoped lang="scss" src="./Artist.scss"></style>
