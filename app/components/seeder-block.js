import Component from '@glimmer/component';
import { lte, not, or } from '@ember/object/computed';
import { action } from '@ember/object';

export default class SeederBlockComponent extends Component {
  max_value = 100;

  counter = null;

  @lte('counter', this.max_value) isCounterValid;
  @not('isCounterValid') isCounterNotValid;
  placeholder = `Max ${this.max_value}`;
  generateReady = false;
  deleteReady = false;

  generateInProgress = false;
  deleteInProgress = false;

  @or('isCounterNotValid', 'generateInProgress', 'deleteInProgress')
  generateIsDisabled;

  @or('generateInProgress', 'deleteInProgress') deleteIsDisabled;
}
