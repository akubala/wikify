import {
  Vue,
  Component,
  Inject,
  Watch,
  Emit,
} from 'vue-property-decorator';
import SpotifyWebApi from 'spotify-web-api-js';
import _debounce from 'lodash/debounce';
import _map from 'lodash/map';

import { SPOTIFY_API_PROVIDER } from '@/consts/providers';
import SelectOption from '@/types/SelectOption';
import spotifyApiCatch from '@/utils/spotifyApiCatch';

const minLength = 3;
const debounceTimeout = 300;

@Component
export default class SpotifyProvider extends Vue {
  @Inject(SPOTIFY_API_PROVIDER) public spotifyApi!: SpotifyWebApi.SpotifyWebApiJs;

  public items: Array<SelectOption<SpotifyApi.ArtistObjectFull>> = [];
  public searchInput = '';
  public searchFunc = _debounce(this.search, debounceTimeout);

  @Watch('searchInput')
  onSearchChange(value: string | null): void {
    if (value && value.length >= minLength) {
      this.searchFunc(value);
    } else {
      this.items = [];
    }
  }

  @Emit('artist')
  onArtistChange(value: SpotifyApi.ArtistObjectFull) {
    return value;
  }

  private search(value: string): void {
    this.spotifyApi.searchArtists(value, { limit: 10 }).then(
      ({ artists: { items: artists } }: SpotifyApi.ArtistSearchResponse) => {
        this.items = _map(
          artists,
          (artist): SelectOption<SpotifyApi.ArtistObjectFull> => ({
            text: artist.name,
            value: artist,
          }),
        );
      },
    ).catch(spotifyApiCatch);
  }
}
