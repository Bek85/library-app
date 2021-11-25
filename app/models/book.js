import Model, { attr, belongsTo } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') title;
  @attr('date') releaseYear;
  @belongsTo library;
  @belongsTo author;
}
