angular.module('app', ['ui.router'])
  .controller('AppCtrl', AppCtrl)
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/contacts'); 
    
    $stateProvider
      .state('contacts', {
        url: '/contacts',
        templateUrl: './app/contacts/index.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts' 
      })
      .state('addContact', {
        url: '/add-contact',
        templateUrl: './app/contacts/add.html',
        controller: 'AddContactCtrl',
        controllerAs: 'addContact'
      })
  });

function AppCtrl() {
  this.message = 'hello world'; 
}

