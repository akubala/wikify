<template>
  <v-app>
    <spotify-provider v-if="tokenExist">
      <home @artistChange="artistChange" />
    </spotify-provider>
    <div v-if="!artist">
    <welcome :tokenExist="tokenExist" @login="login"/>
    <spotify-provider v-if="tokenExist">
      <welcome-footer />
    </spotify-provider>
    </div>
  </v-app>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
