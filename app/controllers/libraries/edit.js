import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibrariesEditController extends Controller {
  @service router;

  buttonLabel = 'Save changes';
  title = 'Edit library';

  @action
  async saveLibrary(library) {
    library.save();
    this.router.transitionTo('libraries');
  }
}
