import { Vue, Component, Inject } from 'vue-property-decorator';

import { SPOTIFY_IS_LOGGED } from '@/consts/providers';

@Component
export default class Home extends Vue {
  @Inject(SPOTIFY_IS_LOGGED) public spotifyIsLogged!: boolean;

  public artist: SpotifyApi.ArtistObjectFull | null = null;

  public onArtistChange(artist: SpotifyApi.ArtistObjectFull): void {
    this.artist = artist;
  }
}
