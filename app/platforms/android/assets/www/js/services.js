angular.module('starter.services', [])

.factory('pastPhotos', function () {
    var images = [
    {
        date: "September 2014",
        src: ['http://jamaicainn.com/images/resort/beach/beach_1.jpg', 'http://thesinglewivesclub.com/wp-content/uploads/2015/04/beach.jpg', 'http://46mbk22zqw0136sbkcey5gbxrv.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/beach-umbrella.jpg']
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
        searchPhoto: function (tags) {
            $http.defaults.headers.common['startTime'] = date;
            return $http.put('http://hackrisk.utfapp.com/prescriptions/' + id,
                {
                }
            );
        },
        postExam: function (value) {
            $http.defaults.headers.common['examValue'] = value;
            $http.defaults.headers.common['examType'] = "glycemia";
            return $http.post('http://hackrisk.utfapp.com/exams',
                {
                }
            );
        },
    }
}]);
