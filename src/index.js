const angular = require('angular');
const equalityModule = require('./components/equality');

/**
 *  angular module with some directives to help with input validations
 *  @namespace inputValidations
 */
const inputValidations = angular.module('inputValidations', [equalityModule.name]);

module.exports = inputValidations;
