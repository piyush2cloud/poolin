angular.module('poolin.controllers',[])

    .controller("myCtrl", function ($scope) {
    $scope.firstDivHide = 0;
    $scope.secondDivHide = 0;
    $scope.firstDivShow = 1;
    $scope.secondDivShow = 1;

    $scope.fadeRight = function () {
        $scope.secondDivHide = 1;
        $scope.firstDivShow = 1;
        $scope.firstDivHide = 0;
    }

    $scope.fadeLeft = function () {
        $scope.firstDivHide = 1;
        $scope.secondDivShow = 1;
        $scope.secondDivHide = 0;
    }

});
