angular.module("hello", [])
    .controller("home", ["$scope", function($scope){
        $scope.greeting={id:123456, content: "Hello World!"}
    }]);