import angular from 'angular';
import equalityModule from './components/equality';

/**
 *  angular module with some directives to help with input validations
 *  @namespace inputValidations
 */
angular
    .module('inputValidations', [equalityModule.name]);
