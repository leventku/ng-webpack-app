class UibAlertController {
  constructor($scope, $element, $attrs, $interpolate, $timeout) {
    $scope.closeable = !!$attrs.close;
    $element.addClass('alert');
    $attrs.$set('role', 'alert');
    if ($scope.closeable) {
      $element.addClass('alert-dismissible');
    }

    var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ?
      $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;

    if (dismissOnTimeout) {
      $timeout(function () {
        $scope.close();
      }, parseInt(dismissOnTimeout, 10));
    }
  }
}

export default UibAlertController;