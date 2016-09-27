import angular from 'angular';
import equalityModule from './components/equality';
import withFocusModule from './components/with-focus';

/**
 *  angular module with some directives to help with input events, actions and validations
 *  @namespace inputHelpers
 */
const inputHelpers = angular.module('inputHelpers', [withFocusModule.name, equalityModule.name]);

export default inputHelpers;
