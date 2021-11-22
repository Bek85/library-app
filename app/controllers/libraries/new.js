import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibrariesNewController extends Controller {
  @service router;
  @action
  async saveLibrary(newLibrary) {
    await newLibrary.save();
    this.router.transitionTo('libraries');
  }
}
