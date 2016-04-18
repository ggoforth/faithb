angular.module('app')
  .controller('AddContactCtrl', AddContactsCtrl);

function AddContactsCtrl(Contacts) {
  //function here for adding a contact
  this.addContact = Contacts.addContact;
}
