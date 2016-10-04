import angular from 'angular';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

// import routing from './app.config';

// angular.module('app', [])
//   .config(routing);


import alert from '../components/alert/alert.module'
import AlertDemoCtrl from '../components/alert/docs/demo' 
import templateUrl from 'ngtemplate!./app.html'
import alertTpl from '../components/alert/docs/demo.html'


let app = () => {
  return {
    templateUrl: templateUrl,
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($templateCache) {
    // this.option = '';
    this.templ = $templateCache.get('uib/template/alert/alert.html');
  }
}

const MODULE_NAME = 'app';
angular.module(MODULE_NAME, [alert])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .controller('AlertDemoCtrl', AlertDemoCtrl)
  .run(function($templateCache) {
    $templateCache.put('alert.html', alertTpl);
  })
  ;

export default MODULE_NAME;