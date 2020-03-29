<template>
  <div>
    <div class="header">
      <v-avatar size="160" v-if="imageSrc">
        <img :src="imageSrc">
      </v-avatar>
      <h2 class="name">{{name}}</h2>
    </div>
    <div class="content">
      <div class="section">
        <h4>Opis</h4>
      </div>
      <v-divider :vertical="!isMobile" />
      <div class="tracks-section">
        <div class="track" v-for="src in trackUrls" :key="src">
          <iframe
            width="300"
            height="380"
            :src="src"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Artist.ts" lang="ts"></script>
<style scoped lang="scss" src="./Artist.scss"></style>
