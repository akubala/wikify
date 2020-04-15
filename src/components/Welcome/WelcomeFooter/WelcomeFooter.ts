import { Vue, Component, Inject } from 'vue-property-decorator';
import SpotifyWebApi from 'spotify-web-api-js';

import { SPOTIFY_API_PROVIDER } from '@/consts/providers';
import spotifyApiCatch from '@/utils/spotifyApiCatch';
import wiki from '@/plugins/wiki';

@Component
export default class SpotifyProvider extends Vue {
  @Inject(SPOTIFY_API_PROVIDER) public spotifyApi!: SpotifyWebApi.SpotifyWebApiJs;
  public topArtists: Array<SpotifyApi.ArtistObjectFull> = [];

  public artTitle = '';
  public artContent = '';

  constructor() {
    super();
    this.spotifyApi.getMe();
    this.getTopArtists();
    this.getRandomWiki();
  }
  private getTopArtists(): void {
    this.spotifyApi.getMyTopArtists({ limit: 6 }).then(
      ({ items }: SpotifyApi.UsersTopArtistsResponse) => {
        this.topArtists = items;
      },
    ).catch(spotifyApiCatch);
  }

  private getRandomWiki(): void {
    wiki.random().then(([artTitle]) => {
      this.artTitle = artTitle;
      wiki.page(this.artTitle).then((page) => page.summary()).then((summary) => {
        this.artContent = summary;
      });
    });
  }
}
