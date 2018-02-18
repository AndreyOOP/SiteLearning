(function(){
    'use strict';

    angular.module('NarrowItDownApp', []).
    controller('NarrowItDownController', NarrowItDownController).
    service('MenuSearchService', MenuSearchService);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){

        var contr = this; //todo rename

        contr.found = "";

        contr.f = function(){
            MenuSearchService.getMatchedMenuItems('').then(function(result){

                console.log(result); //will return menu item[1]
                contr.found = result;
            }); //todo add error handling
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){

        var service = this;

        service.getMatchedMenuItems = function(searchTerm){

            //using $http rich out to the server
            var httpPromise = $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json" //todo inject as a constant
            }).then(function(result){
                
                //loop them & check search term
                //alert(result.data.menu_items);
                
                return result.data.menu_items[1];

            }); //todo add error catch
            
            return httpPromise; //return list wrappend to the promise
        };
    }
})
();