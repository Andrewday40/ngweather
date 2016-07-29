
(function(){
  angular.module('ngweather')
         .controller('hourlyController', hourlyController);

  hourlyController.$inject = ['$scope', 'weatherService'];

  function hourlyController($scope, weatherService){
    $scope.hourlyData = weatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'There will be some drizzle',
    };
    $scope.$watch(function(){
      return weatherService.weather;
    }, function(value){
      $scope.hourlyData = value;
    });

  }
})();
