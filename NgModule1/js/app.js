(function(){
  'use strict';

  angular.module('LunchCheck', []).controller('LunchCheckController', ControllerFunction);

  ControllerFunction.$inject = ['$scope'];

  function ControllerFunction($scope){

    $scope.fontColorClass = "";
    $scope.borderColorClass = "";
    $scope.message = "";

    var getQtyOfWords = function(dishList){
        
        if(dishList === undefined || dishList === "")
            return -1;

        var qty = 0;
        var dishes = dishList.split(',');

        for(var i=0; i<dishes.length; i++){
            
            var trimed = dishes[i].trim();

            if( !( trimed === '' || trimed === ' ')) 
                qty++;
        }

        console.log('Qty = ' + qty);
        return qty;
    }

    $scope.CountDishes = function(){ //todo add optional part
        
        var qty = getQtyOfWords($scope.inputText);

        if( qty <= 0){
            $scope.message = "Please enter data first";
            $scope.fontColorClass = "redFont";
            $scope.borderColorClass = "redBorder";
            return;
        }
        
        if( qty <= 3){
            $scope.message = "Enjoy!";
            $scope.fontColorClass = "greenFont";
            $scope.borderColorClass = "greenBorder";
            return;
        
        } else {
            $scope.message = "Too much!";
            $scope.fontColorClass = "greenFont";
            $scope.borderColorClass = "greenBorder";
        }
    }
  };

})();