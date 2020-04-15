import { Vue, Component, Provide } from 'vue-property-decorator';
import SpotifyWebApi from 'spotify-web-api-js';
import Cookies from 'js-cookie';
import queryString from 'query-string';

import { SPOTIFY_API_PROVIDER, SPOTIFY_IS_LOGGED } from '@/consts/providers';

@Component
export default class SpotifyProvider extends Vue {
  @Provide(SPOTIFY_API_PROVIDER) public spotifyApi = new SpotifyWebApi();
  @Provide(SPOTIFY_IS_LOGGED) public spotifyIsLogged = false;

  constructor() {
    super();
    const { access_token: urlToken } = queryString.parse(window.location.hash);
    const token = urlToken || Cookies.get('token');

    if (urlToken) { Cookies.set('token', urlToken); }

    if (token) {
      this.spotifyApi.setAccessToken(token as string);
    }

    this.spotifyApi.getMe().then(() => {
      this.spotifyIsLogged = true;
    });
  }
}
