import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LibrariesEditRoute extends Route {
  model({ library_id }) {
    if (library_id === 'new') {
      return this.store.createRecord('library');
    } else {
      return this.store.findRecord('library', library_id);
    }
  }

  @action
  willTransition(transition) {
    const model = this.controllerFor('libraries.edit').model;
    if (model.hasDirtyAttributes) {
      const confirmation = confirm(
        "Your changes haven't been saved yet. Would you like to leave this form?"
      );
      confirmation ? model.rollbackAttributes() : transition.abort();
    }
  }
}
