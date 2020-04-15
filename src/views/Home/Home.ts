import { Vue, Component, Inject } from 'vue-property-decorator';

import { SPOTIFY_IS_LOGGED_OBSERVABLE } from '@/consts/providers';
import Observable from '@/types/Observable';

@Component
export default class Home extends Vue {
  @Inject(SPOTIFY_IS_LOGGED_OBSERVABLE)
  public spotifyIsLoggedObservable!: Observable<boolean>;

  public artist: SpotifyApi.ArtistObjectFull | null = null;

  get spotifyIsLogged(): boolean { return this.spotifyIsLoggedObservable.value; }

  public onArtistChange(artist: SpotifyApi.ArtistObjectFull): void {
    this.artist = artist;
  }
}
