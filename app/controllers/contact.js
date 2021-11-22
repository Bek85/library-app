import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContactController extends Controller {
  @tracked emailAddress = '';
  @tracked message = '';

  @action
  sendMessage() {
    console.log(
      `You have sent the following message '${this.message}' to this email: ${this.emailAddress}`
    );
  }
}
