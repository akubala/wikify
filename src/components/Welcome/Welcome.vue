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
        <br />
        <p>Listen to your favourite music and find info about the author!</p>
        <p>
          WikiFy was proudly made with
          <a href="https://vuejs.org">Vue.js</a>
        </p>
        <p>
          We used
          <a href="https://yarnpkg.com/">yarn</a> package manager.
        </p>
      </v-col>
    </v-row>
    <v-row no-gutters style="height: 100px;"></v-row>
    <v-row justify="center" v-if="!spotifyIsLogged">
      <v-col>
        <h2 class="text-center">Usage</h2>
        <br />
        <div class="text-center">
          <p>
            To use our app you are obligated to have your
            <a
              href="https://www.spotify.com/"
            >own Spotify Account.</a>
          </p>
          <button class="button" v-on:click="loginToSpotify">Login with Spotify</button>
        </div>
        <p></p>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="!spotifyIsLogged">
      <div>
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/bLg3KgN02oI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </v-row>
  </v-container>
</template>
<script src="./Welcome.ts" lang="ts"></script>
<style scoped lang="scss" src="./Welcome.scss"></style>
