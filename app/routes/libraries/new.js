import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LibrariesNewRoute extends Route {
  @service store;
  @service router;
  model() {
    return this.store.createRecord('library');
  }
}
