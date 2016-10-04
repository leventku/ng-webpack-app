
import angular from 'angular';

import uibAlertDirective from './uibAlert.directive.js'
import UibAlertController from './UibAlertController.controller.js'
import template from './templates/alert.html'

const MODULE_NAME = 'ui.bootstrap.alert';

angular.module(MODULE_NAME, [])
  .run(function($templateCache) {
    $templateCache.put('uib/template/alert/alert.html', template);
  })
  .directive('uibAlert', uibAlertDirective)
  .controller('UibAlertController', UibAlertController)
  ;

export default MODULE_NAME;