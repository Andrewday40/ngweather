
(function(){
  angular.module('ngweather')
         .controller('dailyController', dailyController);

  dailyController.$inject = ['$scope', 'weatherService'];

  function dailyController($scope, weatherService){
    $scope.dailyData = weatherService.weather;


    $scope.$watch(function(){
      return weatherService.weather;
    }, function(value){
      $scope.dailyData = value;
    });
  }
})();

// commenting for pushing
