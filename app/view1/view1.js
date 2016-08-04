'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', View1Ctrl])

function View1Ctrl( $scope, $http) {
  $scope.test = '!!!!!'
  $http.get( 'http://test_domain.com:5000/my' ).success( function ( data ) {
    $scope.items = data;
  })
  .error(function (data, status, header, config) {
    $scope.ResponseDetails = 'not success'
            });
}
View1Ctrl.$inject = [ '$http' ];
