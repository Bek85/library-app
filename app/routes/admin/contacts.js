import Route from '@ember/routing/route';

export default class AdminContactsRoute extends Route {
  model() {
    return this.store.findAll('contact');
  }
}
