angular.module('app')
  .controller('ContactsCtrl', ContactsCtrl);

function ContactsCtrl(Contacts) {
  this.contacts = Contacts.contacts; 
}