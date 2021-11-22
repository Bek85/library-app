import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default class IndexController extends Controller {
  headerMessage = 'Coming Soon';
  @tracked emailAddress = '';
  @tracked responseMessage = '';

  @match('emailAddress', /^.+@.+\..+$/) isValid;
  @not('isValid') isDisabled;

  @action
  saveInvitation() {
    alert(
      `Saving of the following email address is in progress: ${this.emailAddress}`
    );
    this.responseMessage = `Thank you! We've just saved your email address: ${this.emailAddress}`;
    this.emailAddress = '';
  }
}
