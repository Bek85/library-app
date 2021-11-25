import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LibrariesEditRoute extends Route {
  model(params) {
    return this.store.findRecord('library', params.library_id);
  }

  renderTemplate() {
    this.render('libraries/form');
  }

  @action
  willTransition(transition) {
    const model = this.controllerFor('libraries.edit').model;
    if (model.hasDirtyAttributes) {
      const confirmation = confirm(
        "Your changes havent't been seved yet. Would you like to leave this form?"
      );
      confirmation ? model.rollbackAttributes() : transition.abort();
    }
  }
}
