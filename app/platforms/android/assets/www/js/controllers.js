angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, pastPhotos, wsAPI, $ionicModal) {
    $scope.images = {};
    var photos = [];
    photos = pastPhotos;
    $scope.images = pastPhotos;

    var photoSize = [302, 227, 177, 127, 127, 127, 177, 227, 302];
    


    for (var i = 0; i < photos.length; i++) {
        var total = 0;
        for (var j = 0; j < photos[i].src.length; j++) {
            total += photoSize[j % photoSize.length] + 50;

        }
        $scope.images[i].width = total/2;
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



    $ionicModal.fromTemplateUrl('templates/photo.html', function($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: "fade-in"
    });  

    $scope.loadPhoto = function (date, photo) {
        $scope.currentPhoto = photo;
        $scope.currentDate = date;

        $scope.currentPhotoUrl = $scope.images[date].src[photo];
        console.log($scope.currentPhotoUrl);

        $scope.modal.scope = $scope;
        $scope.modal.show();
        
    }

    $scope.swipeLeft = function () {
       
        var date = $scope.currentDate;
        var photo = ($scope.currentPhoto + 1) % $scope.images[date].src.length;
        $scope.currentPhoto = photo;
        $scope.currentPhotoUrl = $scope.images[date].src[photo];
    }
    $scope.swipeRight = function () {
        var date = $scope.currentDate;
        var photo = ($scope.currentPhoto - 1) % $scope.images[date].src.length;
        $scope.currentPhoto = photo;
        $scope.currentPhotoUrl = $scope.images[date].src[photo];
    }

})

.controller('SettingsCtrl', function($scope, Chats) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {

})

.controller('AccountCtrl', function($scope) {

});
