angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, pastPhotos, wsAPI, $ionicModal, $http, $timeout) {
    $scope.images = {};
    var photos = [];
    photos = pastPhotos;
    $scope.images = pastPhotos;
    $scope.myPhotos = {};
    $scope.myPhotosWidth = {};
    $scope.flickrPhotos = {};
    $scope.flickr = {};
    $scope.tags = {};

    $scope.showSearch = false;

    $scope.searchPhotos = [];
    $scope.searchWidth = {};

    $scope.notificationText = true;

    $scope.showingAnimation = true;

    var numFlicker;

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

    for (var i = 9; i < 50; i++) {

        $scope.imgClass[0+i] = 'imgClass1';

        $scope.imgClass[1+i] = 'imgClass2';
        $scope.imgClass[2+i] = 'imgClass3';

        $scope.imgClass[3+i] = 'imgClass4';
        $scope.imgClass[4+i] = 'imgClass4';
        $scope.imgClass[5+i] = 'imgClass4';

        $scope.imgClass[6+i] = 'imgClass3';
        $scope.imgClass[7+i] = 'imgClass2';

        $scope.imgClass[8+i] = 'imgClass1';
    }


    
    $scope.search = function (value) {
        var tags = value.split(",");
        for (var i = 0; i < tags.length; i++)
        {
            tags[i] = tags[i].trim();
            if (tags[i] == ' ' || tags[i] == '') {
                tags.splice(i, 1);
                
            }
        }
        $scope.tags = tags;
        wsAPI.searchPhotos(value).success(function (data) {
            var total = 0;
            for (var i = 0; i < data.length; i++) {

                total += photoSize[i % photoSize.length] + 45;
            }
            $scope.searchWidth = total / 2;

            $scope.searchPhotos = data;
            
  
        });

    }




    
    $ionicModal.fromTemplateUrl('templates/photo.html', function ($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: "fade-in"
    });


    

    $ionicModal.fromTemplateUrl('templates/notification.html', function ($ionicModal2) {
        $scope.modalNotification = $ionicModal2;
        
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: "fade-in"
    });

    $scope.loadPhoto = function (date, photo) {
        $scope.currentPhotoUrl = {};

         if (date >= 0) {
            $scope.currentPhoto = photo;
            $scope.currentDate = date;

            $scope.currentPhotoUrl = $scope.myPhotos[date].pictures[photo].url;

            $scope.modal.scope = $scope;
            $scope.modal.show();
        }
        else if (date == -2) {
            $scope.currentPhoto = photo;
            $scope.currentDate = date;

            $scope.currentPhotoUrl = $scope.searchPhotos[photo].url;
            console.log($scope.currentPhotoUrl);
                     $scope.modal.scope = $scope;
            $scope.modal.show();
        }
        else {
            $scope.currentPhoto = photo;
            $scope.currentDate = -1;

            $scope.currentPhotoUrl = $scope.flickrPhotos[photo];
  

            $scope.modal.scope = $scope;
            $scope.modal.show();
        }


        
    }

    $scope.swipeLeft = function () {
       
        var date = $scope.currentDate;
        var photo;
        /*
        if (date == 1) {
            photo = ($scope.currentPhoto + 1) % $scope.myPhotos.length;
            $scope.currentPhoto = photo;
            $scope.currentPhotoUrl = $scope.myPhotos[photo].url;
            console.log($scope.currentPhotoUrl);
        }*/
        if (date >= 0) {
            photo = ($scope.currentPhoto + 1) % $scope.myPhotos[date].pictures.length;
            $scope.currentPhoto = photo;
            $scope.currentPhotoUrl = $scope.myPhotos[date].pictures[photo].url;
        }
        else if (date == -2) {
            photo = ($scope.currentPhoto + 1) % $scope.searchPhotos.length;
            $scope.currentPhoto = photo;
            $scope.currentPhotoUrl = $scope.searchPhotos[photo].url;
        }
        else {
      
            photo = ($scope.currentPhoto + 1) % numFlicker;
            $scope.currentPhoto = photo;
            $scope.currentPhotoUrl = $scope.flickrPhotos[photo];
        }
            
        
    }
    $scope.swipeRight = function () {
        var date = $scope.currentDate;
        var photo;
        /*
        if (date == 1) {
            photo = ($scope.currentPhoto - 1) % $scope.myPhotos.length;
            if (photo < 0) {
                photo = $scope.myPhotos.length - 1;
            }
            $scope.currentPhoto = photo;
           
            $scope.currentPhotoUrl = $scope.myPhotos[photo].url;
        }*/
        if (date >= 0) {
            photo = ($scope.currentPhoto - 1) % $scope.myPhotos[date].pictures.length;
            if (photo < 0)
                photo = $scope.myPhotos[date].pictures.length - 1;
            $scope.currentPhoto = photo;
   
            $scope.currentPhotoUrl = $scope.myPhotos[date].pictures[photo].url;
        }
        else if (date == -2) {
            photo = ($scope.currentPhoto - 1) % $scope.searchPhotos.length;
            if (photo < 0) {
                photo = $scope.searchPhotos.length - 1;
            }
            $scope.currentPhoto = photo;

            $scope.currentPhotoUrl = $scope.searchPhotos[photo].url;
        }
         
        else {
            photo = ($scope.currentPhoto - 1) % numFlicker;
            $scope.currentPhoto = photo;
            $scope.currentPhotoUrl = $scope.flickrPhotos[photo];
        }
    }


    $scope.searchGeo = function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            wsAPI.getPhotosGeo(position.coords.latitude, position.coords.longitude).success(function (data) {

                if (data.length > 0) {
                    $scope.myPhotos = data;
                            
                    console.log(data);
                    for (var i = 0; i < $scope.myPhotos.length; i++) {
                        var total = 0;
                        for (var j = 0; j < $scope.myPhotos[i].pictures.length; j++) {
                            total += photoSize[j % photoSize.length] + 60;
                        }
             
                        $scope.myPhotos[0].width = total/2;
                    }
                  
                    
                }

                
                $scope.modalNotification.show();
                $timeout(function () {

                    
                    $scope.modalNotification.hide();
                 
                    $timeout(function () {
                        $scope.modalNotification.show();
                        $scope.modalNotification.scope.notificationText = false;
                        
                        $timeout(function () {
                            $scope.modalNotification.hide();
                            $scope.showingAnimation = false;

                        }, 3000);
                    }, 500);

                }, 3000);
            });
        });
    }


    $scope.searchGeoFlickr = function () {
        navigator.geolocation.getCurrentPosition(function (position) {

           

            //FLICKR
            //console.log(position.coords.latitude);
            var apikey = "0ce4e9dc51e53f48128403886f827dbe";

            var photosQuery = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=771bb259d2c929511fddfe44cbe9a310&sort=interestingness-desc&privacy_filter=1&media=photos&lat=" + position.coords.latitude.toString() + "&lon=" + position.coords.longitude.toString() + "&radius=0.2&per_page=50&page=1&format=json&nojsoncallback=1";

            numFlicker = 0;
            $http.get(photosQuery).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available

                    angular.forEach(data.photos.photo, function (photoelement) {

                        var photoUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=771bb259d2c929511fddfe44cbe9a310&photo_id=" + photoelement.id.toString() + "&format=json&nojsoncallback=1";

                        $http.get(photoUrl).
                            success(function (data, status, headers, config) {
                                $scope.flickrPhotos[numFlicker] = data.sizes.size[4].source;
                                numFlicker++;



                                var total = 0;
                                for (var j = 0; j < numFlicker; j++) {
                                    total += photoSize[j % photoSize.length] + 100;
                                    

                                }
                                $scope.flickr.width = total / 2;
                            }).
                            error(function (data, status, headers, config) {
                                console.log("Unable to download photo");
                            });


                    });
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("Unable to find photos");
                });

        });

      
    }

    
    $scope.searchGeoFlickr();
    
    $scope.searchGeo();



    $scope.callAtTimeout = function () {
        $scope.searchGeo();
        
       // $timeout(function () { $scope.callAtTimeout(); }, 3000);
    }
  
   

  

})

.controller('SettingsCtrl', function($scope, Chats) {

})

.controller('SearchCtrl', function ($scope, $stateParams, Chats) {


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
                                $scope.photos[numFlicker] = data.sizes.size[5].source;
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

