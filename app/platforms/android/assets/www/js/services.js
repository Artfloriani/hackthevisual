angular.module('starter.services', [])

.factory('pastPhotos', function () {
    var images = [
    {
        date: "September 2014",
        src: ['http://jamaicainn.com/images/resort/beach/beach_1.jpg', 'http://thesinglewivesclub.com/wp-content/uploads/2015/04/beach.jpg', 'http://46mbk22zqw0136sbkcey5gbxrv.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/beach-umbrella.jpg', 'http://bstoursworld.net/Inboundtours/beach_parasol.jpg', 'http://images.trvl-media.com/media/content/shared/images/travelguides/destination/601685/Myrtle-Beach-46799.jpg', 'http://images2.fanpop.com/images/photos/4800000/Beach-beaches-4843817-1280-800.jpg']
    },
    {
        date: "January 2014",
        src: ['http://jamaicainn.com/images/resort/beach/beach_1.jpg', 'http://46mbk22zqw0136sbkcey5gbxrv.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/beach-umbrella.jpg', 'http://thesinglewivesclub.com/wp-content/uploads/2015/04/beach.jpg']
    }
    ];

    return images;
})
.factory('wsAPI', ['$http', function ($http) {
    return {
        searchPhotos: function (tags) {
            return $http.get('http://htv.utfapp.com/searchByTags?tags='+tags,
                {
                }
            );
        },
        getPhotosGeo: function (lat, lon) {

            return $http.get('http://htv.utfapp.com/searchByLocation?lat=' + lat + '&lon=' + lon,
                {
                }
            );
        },
    }
}]);
