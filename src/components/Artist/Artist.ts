import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SpotifyProvider extends Vue {
  @Prop() public artist!: SpotifyApi.ArtistObjectFull;
}
