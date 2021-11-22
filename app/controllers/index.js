import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default class IndexController extends Controller {
  @service store;

  headerMessage = 'Coming Soon';
  @tracked emailAddress = '';
  @tracked responseMessage = '';

  @match('emailAddress', /^.+@.+\..+$/) isValid;
  @not('isValid') isDisabled;

  @action
  saveInvitation() {
    const email = this.emailAddress;

    const newInvitation = this.store.createRecord('invitation', {
      email: email,
    });
    newInvitation.save();

    this.responseMessage = `Thank you! We've just saved your email address: ${this.emailAddress}`;
    this.emailAddress = '';
  }
}
