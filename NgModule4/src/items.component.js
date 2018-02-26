(function () {
    'use strict';
    
    angular.module('data')
    .component('itemsOfCategory', {
      templateUrl: 'src/templates/item-detail.template.html',
      bindings: {
        itemsInComponent: '<'
      }
    });  
    
})();    