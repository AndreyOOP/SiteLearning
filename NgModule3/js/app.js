(function(){
    'use strict';

    angular.module('NarrowItDownApp', []).
    controller('NarrowItDownController', NarrowItDownController).
    service('MenuSearchService', MenuSearchService).
    constant('MenuItemsPath', "https://davids-restaurant.herokuapp.com/menu_items.json").
    directive('foundItems', FoundItemsDirective);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){

        var contr = this; 

        contr.narrow = function(){
            MenuSearchService.getMatchedMenuItems(contr.sterm).then(function(result){
                
                contr.found = result;

            }).catch(function(error){
                console.log(error);
            });
        }

        contr.removeItem = function(ind){
            MenuSearchService.removeItem(ind);
        }
    }

    function FoundItemsDirective(){
        
        var ddo = {
            templateUrl: 'listitem.html',
            scope: {
                foundItm: '<',  //attribute definition
                onRemove: '&'   
            },
            controller: NarrowListDirectiveController,
            controllerAs: 'narrower',
            bindToController: true
        };

        return ddo;
    }

    function NarrowListDirectiveController(){}

    MenuSearchService.$inject = ['$http', 'MenuItemsPath'];
    function MenuSearchService($http, MenuItemsPath){

        var service = this;

        var found = [];

        service.getMatchedMenuItems = function(searchTerm){

            return $http({
                url: MenuItemsPath 
            }).then(function(result){
                
                found = [];
                var items = result.data.menu_items;

                if(searchTerm){
                    for(var i=0; i<items.length; i++){
                        if(items[i].description.indexOf(searchTerm) >= 0){
                            found.push(items[i]);
                        }
                    }
                }

                return found;

            }).catch(function(error){
                console.log(error);
            });
        };

        service.removeItem = function(ind){
            found.splice(ind, 1);
        };
    }
})
();