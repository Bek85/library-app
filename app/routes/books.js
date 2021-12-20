import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class BooksRoute extends Route {
  model() {
    return hash({
      books: this.store.findAll('book'),
      authors: this.store.findAll('author'),
      libraries: this.store.findAll('library'),
    });
  }
}
