angular.module('Foodhub')
  .directive('quantityInput', function () {
    return {
      template: require('./quantity-input.html'),
      replace: true,
      restrict: 'E',
      require: 'ngModel',
      scope: true,
      link: function($scope, $element, $attrs, ngModel) {

        $scope.increaseCount = function () {
          $scope.foodCounter += 1;
          ngModel.$setViewValue($scope.foodCounter);
        };

        $scope.decreaseCount = function () {
          if ($scope.foodCounter > 0) {
            $scope.foodCounter -= 1;
            ngModel.$setViewValue($scope.foodCounter);
          }
        };

        ngModel.$render = function() {
          $scope.foodCounter = ngModel.$modelValue || 0;
        };
      }
    };
  });

