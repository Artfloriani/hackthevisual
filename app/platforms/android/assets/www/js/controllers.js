angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, pastPhotos, wsAPI) {
    $scope.images = {};
    $scope.images = pastPhotos;


    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude);
    });

    $scope.searchPhotos = function (value) {


    }

    $scope.imgClass = {};
    $scope.imgClass[0] = 'imgClass1';

    $scope.imgClass[1] = 'imgClass2';
    $scope.imgClass[2] = 'imgClass3';

    $scope.imgClass[3] = 'imgClass4';
    $scope.imgClass[4] = 'imgClass4';
    $scope.imgClass[5] = 'imgClass4';

    $scope.imgClass[6] = 'imgClass3';
    $scope.imgClass[7] = 'imgClass2';

    $scope.imgClass[8] = 'imgClass1';

    
    $scope.search = function (value) {
        wsAPI.getPrescriptions(value).success(function (data) {
            console.log(data);
        });

    }

    

})

.controller('SettingsCtrl', function($scope, Chats) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

})

.controller('AccountCtrl', function($scope) {

});
