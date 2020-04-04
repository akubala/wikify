import { Vue, Component, Inject, Prop } from "vue-property-decorator";
import SpotifyWebApi from "spotify-web-api-js";
import { SPOTIFY_API_PROVIDER } from "@/consts/providers";
import spotifyApiCatch from "@/utils/spotifyApiCatch";
import _map from "lodash/map";
import _slice from"lodash/slice";


@Component
export default class SpotifyProvider extends Vue {
  @Inject(SPOTIFY_API_PROVIDER) public spotifyApi!: SpotifyWebApi.SpotifyWebApiJs;
  public topArtists: Array<SpotifyApi.ArtistObjectFull> = [];

  constructor() {
      super();
      this.getTopArtists();
  }
  private getTopArtists(): void {
    this.spotifyApi.getMyTopArtists({ limit: 6 }).then(
        ({items}: SpotifyApi.UsersTopArtistsResponse) => {
            this.topArtists = items;
            console.log(this.topArtists)
        }
    ).catch(spotifyApiCatch);
  }
}