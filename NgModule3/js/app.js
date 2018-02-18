(function(){
    'use strict';

    angular.module('NarrowItDownApp', []).
    controller('NarrowItDownController', NarrowItDownController).
    service('MenuSearchService', MenuSearchService).
    constant('MenuItemsPath', "https://davids-restaurant.herokuapp.com/menu_items.json");
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){

        var contr = this; //todo rename

        contr.sterm = "";
        contr.found = "";

        contr.narrow = function(){
            MenuSearchService.getMatchedMenuItems(contr.sterm).then(function(result){ //todo add search term
                
                // todo temporary;
                contr.found = "";
                for(var i=0; i<result.length; i++){
                    contr.found += result[i].description + "|";
                }
            }).catch(function(error){
                console.log(error);
            });
        }
    }

    MenuSearchService.$inject = ['$http', 'MenuItemsPath'];
    function MenuSearchService($http, MenuItemsPath){

        var service = this;

        service.getMatchedMenuItems = function(searchTerm){

            return $http({
                url: MenuItemsPath 
            }).then(function(result){
                
                var found = [];
                var items = result.data.menu_items;

                if(searchTerm){
                    for(var i=0; i<items.length; i++){
                        if(items[i].description.includes(searchTerm)){
                            found.push(items[i]);
                        }
                    }
                }

                return found;

            }).catch(function(error){
                console.log(error);
            });
        };
    }
})
();