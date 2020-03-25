import { Vue, Component, Provide } from 'vue-property-decorator';
import SpotifyWebApi from 'spotify-web-api-js';
import Cookies from 'js-cookie';
import queryString from 'query-string';

import { SPOTIFY_API_PROVIDER } from '@/consts/providers';

@Component
export default class SpotifyProvider extends Vue {
  @Provide(SPOTIFY_API_PROVIDER) public spotifyApi = new SpotifyWebApi();

  constructor() {
    super();
    const { access_token: urlToken } = queryString.parse(window.location.hash);
    const token = urlToken || Cookies.get('token');

    if (urlToken) { Cookies.set('token', urlToken); }

    if (token) {
      this.spotifyApi.setAccessToken(token as string);
    }
  }
}
