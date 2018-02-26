(function () {
    'use strict';
    
    angular.module('data')
    .component('categories', {
      templateUrl: 'src/templates/shoppinglist.template.html',
      bindings: {
        items: '<'
      }
    });
    
})();