(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('AllCategories', "https://davids-restaurant.herokuapp.com/categories.json")
    .constant('ItemDetails', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");
    
    
    MenuDataService.$inject = ['$http', 'AllCategories', 'ItemDetails'];
    function MenuDataService($http, AllCategories, ItemDetails) {
    
      var service = this;
    
      service.getAllCategories = function(){
        return $http({
            url: AllCategories
        }).then(function(result){

            return result.data;
        }).catch(function(error){
            console.log(error);
        });
      };

      service.getItemsForCategory = function(categoryShortName){
        return $http({
            url: ItemDetails + categoryShortName
        }).then(function(result){

            return result.data;
        }).catch(function(error){
            console.log(error);
        });
      };
    }
    
    })();