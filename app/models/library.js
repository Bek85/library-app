import Model, { attr } from '@ember-data/model';
import { notEmpty } from '@ember/object/computed';

export default class LibraryModel extends Model {
  @attr('string') name;
  @attr('string') address;
  @attr('string') phone;

  @notEmpty('name') isValid;
}
