import { Vue, Component, Prop } from 'vue-property-decorator';

import loginToSpotify from '@/utils/loginToSpotify';

@Component
export default class Welcome extends Vue {
  @Prop() public spotifyIsLogged!: boolean;

  readonly loginToSpotify = loginToSpotify;
}
