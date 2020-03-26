import { Vue, Component, Inject } from 'vue-property-decorator';
// import SpotifyWebApi from 'spotify-web-api-js';

// import { SPOTIFY_API_PROVIDER } from '@/consts/providers';
import TopBar from '@/components/TopBar/TopBar.vue';

@Component({
  components: { TopBar },
})
export default class HelloWorld extends Vue {
  // @Inject(SPOTIFY_API_PROVIDER) private spotifyApi!: SpotifyWebApi.SpotifyWebApiJs;
}
