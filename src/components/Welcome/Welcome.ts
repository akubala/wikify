import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Welcome extends Vue {
  @Prop() public tokenExist!: string;

  private login(): void {
    this.$emit('login');
  }
}
