import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContactController extends Controller {
  @tracked emailAddress = '';
  @tracked message = '';

  @action
  async sendMessage(newContactMessage) {
    await newContactMessage.save();
    this.message = true;
  }
}
