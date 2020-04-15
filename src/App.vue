<template>
  <v-app>
    <spotify-provider >
      <home v-if="tokenExist" @artistChange="artistChange" />
      <div v-if="!artist">
        <welcome :tokenExist="tokenExist" @login="login"/>
        <welcome-footer v-if="tokenExist"/>
      </div>
    </spotify-provider>
  </v-app>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
