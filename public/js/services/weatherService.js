(function(){
  angular.module('ngweather')
         .factory('weatherService', weatherService);

  weatherService.$inject = ['$http'];

  function weatherService($http){
    var passphrase = 'I like cheese and bacon and other delicous foods';
    var baseUrl = 'https://quiet-fjord-78787.herokuapp.com/';
    var config = {
      headers: {
        'passphrase': passphrase
      }
    };
    var service = {
      getHourlyData: getHourlyData,
      getMinutelyData: getMinutelyData,
      getDailyData: getDailyData,
      weather: {}
    };
    return service;

    function getHourlyData(lat, lon){
      var url = baseUrl + 'forecast/hourly/' + lat + ',' + lon;
      return $http.get(url, config)
                  .then(function(response){
                    service.weather = response.data;
                    console.log(service.weather);
                  });
    }

    function getMinutelyData(lat, lon){
      var url = baseUrl + 'forecast/minutely/' + lat + ',' + lon;
      return $http.get(url, config)
                  .then(function(response){
                    service.weather = response.data;
                    console.log(service.weather);
                  });
    }

    function getDailyData(lat, lon){
      var url = baseUrl + 'forecast/daily/' + lat + ',' + lon;
      return $http.get(url, config)
                  .then(function(response){
                    service.weather = response.data;
                    console.log(service.weather);
                  });
    }
  }
})();
