angular.module('app', ['ui.router'])
  .controller('AppCtrl', AppCtrl);

function AppCtrl() {
  this.message = 'hello world'; 
}

