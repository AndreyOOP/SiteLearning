(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['userInfo', 'ApiPath'];
    
    function MyInfoController(userInfo, ApiPath) {
        var reg = this;

        reg.userInfo = userInfo;
        reg.basePath = ApiPath;
    }
    
})();