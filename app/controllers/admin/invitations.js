import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminInvitationsController extends Controller {
  @action
  deleteInvitation(invitation) {
    const confirmed = confirm('Are you sure?');
    if (confirmed) invitation.destroyRecord();
  }
}
