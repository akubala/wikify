<template>
  <div>
    <div class="header">
      <v-avatar size="160" v-if="imageSrc">
        <img :src="imageSrc">
      </v-avatar>
      <h2 class="name">{{name}}</h2>
    </div>
    <div class="content">
      <div class="summary-section" v-if="summary">
        <h2>About</h2>
        <div class="truncate">
          {{summary}}
        </div>
        <a v-if="wikiUrl" :href="wikiUrl">
          See original article on Wikipedia
        </a>
      </div>
      <v-divider :vertical="!isMobile" />
      <div class="tracks-section">
        <div class="track" v-for="src in trackUrls" :key="src">
          <iframe :src="src" />
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Artist.ts" lang="ts"></script>
<style scoped lang="scss" src="./Artist.scss"></style>
