import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibrariesNewRoute extends Route {
  @service store;
  @service router;
  model() {
    return this.store.createRecord('library');
  }

  @action
  async saveLibrary(newLibrary) {
    await newLibrary.save();
    this.router.transitionTo('libraries');
  }

  @action
  willTransition() {
    this.controllerFor('libraries.new').model.rollbackAttributes();
  }
}
