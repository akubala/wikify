import { Component, Vue } from 'vue-property-decorator';

import SpotifyProvider from '@/components/SpotifyProvider/SpotifyProvider.vue';
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';

@Component({
  components: { SpotifyProvider, HelloWorld },
})
export default class App extends Vue {}
