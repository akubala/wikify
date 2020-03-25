import { Component, Vue } from 'vue-property-decorator';

import SpotifyProvider from '@/components/SpotifyProvider/SpotifyProvider.vue';
import Home from '@/views/Home/Home.vue';

@Component({
  components: { SpotifyProvider, Home },
})
export default class App extends Vue {}
