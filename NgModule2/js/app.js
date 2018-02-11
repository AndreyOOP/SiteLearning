(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuyList = this;

        toBuyList.toBuy = ShoppingListCheckOffService.toBuyItems;

        toBuyList.buyFunction = function(index){
            ShoppingListCheckOffService.buyFunction(index);
        };
    }

    AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtList = this;

        boughtList.bought = ShoppingListCheckOffService.boughtItems;
    }

    function ShoppingListCheckOffService(){
        var service = this;

        service.toBuyItems = [
            {name: "box of cookies", quantity: 10},
            {name: "bottles of cola", quantity: 2},
            {name: "pack of salt", quantity: 1},
            {name: "pinapples", quantity: 5},
            {name: "carrots", quantity: 15}
        ];

        service.boughtItems = [];

        service.buyFunction = function(ind){
            
            var item = service.toBuyItems[ind];

            service.toBuyItems.splice(ind, 1);

            service.boughtItems.push(item);
        };
    }
})
();