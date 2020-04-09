<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="text-center">What's up on Spotify?</h2>
        <div class="top-artists">
          <div class="artist">
            <v-avatar
              size="100"
              :title="artist.name"
              v-for="artist in topArtists"
              v-bind:key="artist.name"
            >
              <img :src="artist.images[0].url" />
            </v-avatar>
          </div>
        </div>
      </v-col>
      <v-col>
        <h2 class="text-center">Want new knowledge?</h2>
          <br>
          <h3>{{ artTitle }}</h3>
          <br>
          <p>{{ artContent }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./WelcomeFooter.ts" lang="ts"></script>
<style scoped lang="scss" src="./WelcomeFooter.scss"></style>
