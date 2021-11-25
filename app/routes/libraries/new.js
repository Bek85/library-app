import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LibrariesNewRoute extends Route {
  @service store;
  @service router;
  model() {
    return this.store.createRecord('library');
  }

  renderTemplate() {
    this.render('libraries/form');
  }

  @action
  willTransition() {
    // rollbackAttributes() removes the record from the store
    // if the model 'isNew'
    this.controllerFor('libraries.new').model.rollbackAttributes();
  }
}
