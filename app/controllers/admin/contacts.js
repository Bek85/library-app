import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminContactsController extends Controller {
  @action
  deleteContact(contact) {
    const confirmed = confirm('Are you sure?');
    if (confirmed) contact.destroyRecord();
  }
}
