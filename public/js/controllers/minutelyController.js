
(function(){
  angular.module('ngweather')
         .controller('minutelyController', minutelyController);

  minutelyController.$inject = ['$scope', 'weatherService'];

  function minutelyController($scope, weatherService){
    $scope.minutelyData = weatherService.weather;

    $scope.$watch(function(){
      return weatherService.weather;
    }, function(value){
      $scope.minutelyData = value;
    });
  }
})();
