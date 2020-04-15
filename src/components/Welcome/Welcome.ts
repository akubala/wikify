import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Welcome extends Vue {
  @Prop() public tokenExist!: boolean;

  public login(): void {
    this.$emit('login');
  }
}
