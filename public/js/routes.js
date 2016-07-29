(function(){
  angular.module('ngweather')
         .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
     .when('/', {
       templateUrl: 'html/views/home.html',
       controller: 'homeController'
     })
     .when('/hourly', {
       templateUrl: 'html/views/hourly.html',
       controller: 'hourlyController'
     })
     .when('/minutely', {
       templateUrl: 'html/views/minutely.html',
       controller: 'minutelyController'
     })
     .when('/daily', {
       templateUrl: 'html/views/daily.html',
       controller: 'dailyController'
     })
     .otherwise({
       redirectTo: '/'
     });
  }
})();
