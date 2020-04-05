<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img
          :src="require('@/assets/logo-transparent-full.png')"
          max-width="50%"
          position="center"
          alt="WikiFy main logo"
        ></v-img>
      </v-col>
      <v-col>
        <h2>Know your music!</h2>
        <p>Listen to your favourite music and find info about the author!</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>What's up on Spotify?</h2>
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
        <h2>Random Wikipedia data</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./Welcome.ts" lang="ts"></script>
<style scoped lang="scss" src="./Welcome.scss"></style>