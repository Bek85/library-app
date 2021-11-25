import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AdminSeederRoute extends Route {
  model() {
    return hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author'),
    });
  }
}
