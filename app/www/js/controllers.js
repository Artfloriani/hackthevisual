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

.controller('AccountCtrl', function($scope, $http) {

    $scope.searchGeo= function(){
        navigator.geolocation.getCurrentPosition(function(position) {

            console.log(position.coords.latitude.toString());
            console.log(position.coords.longitude.toString());
            var apikey = "0ce4e9dc51e53f48128403886f827dbe";

            var photosQuery = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=31b5e4dd35373f2889a2b477ab491030&sort=interestingness-desc&privacy_filter=1&media=photos&lat=" + position.coords.latitude.toString() + "&lon=" + position.coords.longitude.toString() + "&radius=0.2&per_page=10&page=1&format=json&nojsoncallback=1";
            var testUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=31b5e4dd35373f2889a2b477ab491030&sort=interestingness-desc&privacy_filter=1&media=photos&lat=51.530881&lon=-0.152524&radius=0.2&per_page=10&page=1&format=json&nojsoncallback=1&auth_token=72157654714260099-4315478173f74ab0&api_sig=f85fc7526f0c01fe6074c6495e0654cf";

            console.log(photosQuery);
            $scope.photos = {};
            var numPhotos = 0;
            $http.get(photosQuery).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log(data);
                    angular.forEach(data.photos.photo, function(photoelement){
                        console.log(photoelement.id);

                        var photoUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=31b5e4dd35373f2889a2b477ab491030&photo_id=" + photoelement.id.toString() + "&format=json&nojsoncallback=1";

                        $http.get(photoUrl).
                            success(function(data, status, headers, config){
                                console.log(data.sizes.size[5].source);
                                $scope.photos[numPhotos] = data.sizes.size[5].source;
                                numPhotos++;
                            }).
                            error(function(data, status, headers, config) {
                                alert("Unable to download photo");
                            });


                    });
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert("Unable to find photos");
                });

        });

    }
});

