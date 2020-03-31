import {
  Vue,
  Component,
  Prop,
  Inject,
  Watch,
} from 'vue-property-decorator';
import SpotifyWebApi from 'spotify-web-api-js';
import _get from 'lodash/get';
import _slice from 'lodash/slice';
import _map from 'lodash/map';
import _replace from 'lodash/replace';

import { SPOTIFY_API_PROVIDER } from '@/consts/providers';
import wiki from '@/plugins/wiki';
import spotifyApiCatch from '@/utils/spotifyApiCatch';

@Component
export default class SpotifyProvider extends Vue {
  @Inject(SPOTIFY_API_PROVIDER) public spotifyApi!: SpotifyWebApi.SpotifyWebApiJs;
  @Prop() public artist!: SpotifyApi.ArtistObjectFull;

  public trackUrls: Array<string> = [];
  public wikiUrl = '';
  public summary = '';

  constructor() {
    super();
    this.setTracks(this.artist.id);
    this.setWikiPage(this.artist.name);
  }

  get isMobile(): boolean { return this.$vuetify.breakpoint.xs; }
  get imageSrc(): string { return _get(this.artist, 'images[0].url'); }
  get name(): string { return this.artist.name; }

  @Watch('artist')
  onArtistChange({ id, name }: SpotifyApi.ArtistObjectFull) {
    this.setTracks(id);
    this.setWikiPage(name);
  }

  private setTracks(id: string) {
    this.spotifyApi.getArtistTopTracks(id, 'from_token').then(
      ({ tracks }: SpotifyApi.ArtistsTopTracksResponse) => {
        this.trackUrls = _map(_slice(tracks, 0, 6), (track) => (
          _replace(track.external_urls.spotify, '/track', '/embed/track')
        ));
      },
    ).catch(spotifyApiCatch);
  }

  private setWikiPage(name: string) {
    wiki.page(name).then((page) => {
      this.wikiUrl = _get(page, 'raw.fullurl', '');
      page.summary().then((summary) => {
        this.summary = summary;
      });
    });
  }
}
