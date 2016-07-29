
(function(){
  angular.module('ngweather')
         .controller('homeController', homeController);

  homeController.$inject = ['$scope', 'weatherService'];

  function homeController($scope, weatherService){
    $scope.updateHourly = updateHourly;
    $scope.updateMinutely = updateMinutely;
    $scope.updateDaily = updateDaily;
    $scope.latitude = 29;
    $scope.longitude = -82;

    function updateHourly(latitude, longitude){
      weatherService.getHourlyData(latitude, longitude);
    }
    function updateMinutely(latitude, longitude){
      weatherService.getMinutelyData(latitude, longitude);
    }
    function updateDaily(latitude, longitude){
      weatherService.getDailyData(latitude, longitude);
    }
  }
})();
