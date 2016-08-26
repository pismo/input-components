import angular from 'angular';
import equalityModule from './components/equality'

angular
    .module('inputValidations', [equalityModule.name]);
