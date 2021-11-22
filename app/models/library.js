import Model, { attr } from '@ember-data/model';

export default class LibraryModel extends Model {
  @attr('string') name;
  @attr('string') address;
  @attr('string') phone;
}
