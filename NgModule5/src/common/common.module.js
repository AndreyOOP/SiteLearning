(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://gentle-sea-83625.herokuapp.com') //was https://davids-restaurant.herokuapp.com
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
