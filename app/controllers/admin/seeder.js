import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class AdminSeederController extends Controller {
  @service('seeder') seederService;
  @tracked authors = this.model.authors;
  @tracked libraries = this.model.libraries;
  @tracked books = this.model.books;
}
