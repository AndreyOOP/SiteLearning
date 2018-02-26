(function () {
'use strict';

angular.module('MenuApp')
.component('shoppingList', {
  templateUrl: 'src/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
