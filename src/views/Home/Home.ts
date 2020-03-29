import { Vue, Component } from 'vue-property-decorator';

import TopBar from '@/components/TopBar/TopBar.vue';

@Component({
  components: { TopBar },
})
export default class HelloWorld extends Vue {
  public artist: SpotifyApi.ArtistObjectFull | Record<string, unknown> = {};

  public onArtistChange(artist: SpotifyApi.ArtistObjectFull): void {
    this.artist = artist;
  }
}
