import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class AdminSeederController extends Controller {
  @tracked authors = this.model.authors;
  @tracked libraries = this.model.libraries;
  @tracked books = this.model.books;
}
