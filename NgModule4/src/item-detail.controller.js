(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['item']
function ItemDetailController(item) {
  var itemDetail = this;
  
  itemDetail.name = item.category.name;
  itemDetail.items = item.menu_items;
}

})();
