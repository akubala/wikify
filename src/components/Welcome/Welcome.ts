import { Vue, Component, Inject, Prop } from "vue-property-decorator";
import SpotifyWebApi from "spotify-web-api-js";
import { SPOTIFY_API_PROVIDER } from "@/consts/providers";
import spotifyApiCatch from "@/utils/spotifyApiCatch";
import _map from "lodash/map";

@Component
export default class SpotifyProvider extends Vue {
  @Inject(SPOTIFY_API_PROVIDER) public spotifyApi!: SpotifyWebApi.SpotifyWebApiJs;
  public topArtists = this.getTopArtists();
  private getTopArtists() {
    this.spotifyApi.getMyTopArtists({ limit: 6 }).then((data) => {
        console.log("test")
        console.log(data.items);
        return data.items;
    });
  }
}