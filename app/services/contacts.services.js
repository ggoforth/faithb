angular.module('app')
  .service('Contacts', Contacts);

function Contacts($state) {
  var vm = this;
  
  /**
   * Main Storage for contacts.
   * 
   * @type {Array}
   */
  this.contacts = [];

  /**
   * Add a contact to the contacts array.
   */
  this.addContact = function (contact) {
    vm.contacts.push(contact);      
    $state.go('contacts'); 
  };
}