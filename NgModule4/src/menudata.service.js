(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('AllCategories', "https://davids-restaurant.herokuapp.com/categories.json");
    
    
    MenuDataService.$inject = ['$http', 'AllCategories'];
    function MenuDataService($http, AllCategories) {
    
      var service = this;
    
      service.getAllCategories = function(){
        //$http, https://davids-restaurant.herokuapp.com/categories.json
        console.log('service.getAllCategories fired');

        return $http({
            url: AllCategories
        }).then(function(result){

            console.log(result.data);

            return result.data;
        }).catch(function(error){
            console.log(error);
        });
      };

      service.getItemsForCategory = function(categoryShortName){
        //$http, https://davids-restaurant.herokuapp.com/menu_items.json?category=
        console.log('service.getItemsForCategory fired');
      };
    }
    
    })();