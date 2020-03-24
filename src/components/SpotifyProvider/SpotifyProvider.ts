import { Vue, Component, Provide } from 'vue-property-decorator';
import SpotifyWebApi from 'spotify-web-api-js';

import { SPOTIFY_API_PROVIDER } from '@/consts/providers';

@Component({})
export default class SpotifyProvider extends Vue {
  @Provide(SPOTIFY_API_PROVIDER) public spotifyApi = new SpotifyWebApi();
}
