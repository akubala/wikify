import { Vue, Component, Prop } from 'vue-property-decorator';
import _get from 'lodash/get';

@Component
export default class SpotifyProvider extends Vue {
  @Prop() public artist!: SpotifyApi.ArtistObjectFull;

  get imageSrc(): string { return _get(this.artist, 'images[0].url'); }
  get name(): string { return this.artist.name; }
}
