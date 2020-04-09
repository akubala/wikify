import { Component, Vue } from 'vue-property-decorator';
import Cookies from 'js-cookie';
import SpotifyWebApi from 'spotify-web-api-js';
import spotifyApiCatch from './utils/spotifyApiCatch';


@Component
export default class App extends Vue {
  public spotifyApi = new SpotifyWebApi();
  public artist: SpotifyApi.ArtistObjectFull | null = null;
  public tokenExist = !!Cookies.get('token');

  private artistChange(artist: SpotifyApi.ArtistObjectFull | null): void {
    this.artist = artist;
  }

  private login(): void {
    Cookies.set('token', 'true');
    this.tokenExist = true;
  }
}
