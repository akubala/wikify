import {
  Vue,
  Component,
  Inject,
  Watch,
} from 'vue-property-decorator';
import SpotifyWebApi from 'spotify-web-api-js';
import _debounce from 'lodash/debounce';

import { SPOTIFY_API_PROVIDER } from '@/consts/providers';

const minLength = 3;
const debounceTimeout = 300;

@Component
export default class SpotifyProvider extends Vue {
  @Inject(SPOTIFY_API_PROVIDER) public spotifyApi!: SpotifyWebApi.SpotifyWebApiJs;

  public items = ['Artysta 1', 'Artysta 2'];

  public artist = '';

  public searchInput = '';

  public searchFunc = _debounce(this.search, debounceTimeout, { trailing: true });

  @Watch('searchInput')
  onPropertyChanged(value: string) {
    if (value) {
      const hasAccurateLength = !value.length || value.length >= minLength;
      if (hasAccurateLength) {
        this.searchFunc(value);
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public search(value: unknown) {
    console.log(value);
  }
}
