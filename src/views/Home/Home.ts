import { Vue, Component, Inject } from 'vue-property-decorator';
import SpotifyWebApi from 'spotify-web-api-js';

import { SPOTIFY_API_PROVIDER } from '@/consts/providers';
import TopBar from '@/components/TopBar/TopBar.vue';
import spotifyApiCatch from '@/utils/spotifyApiCatch';

@Component({
  components: { TopBar },
})
export default class HelloWorld extends Vue {
  @Inject(SPOTIFY_API_PROVIDER) private spotifyApi!: SpotifyWebApi.SpotifyWebApiJs;

  public displayName = '';

  // mounted() {
  //   this.spotifyApi.getMe().then(({ display_name: displayName }) => {
  //     this.displayName = displayName || '';
  //   }).catch(spotifyApiCatch);
  // }
}
