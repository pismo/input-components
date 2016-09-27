import angular from 'angular';

/**
 * angular module to help to validate when one input has the same value than other
 * @namespace manualFocus
 */
const manualFocusModule = angular
    .module('manualFocus', [])
    .directive('manualFocus', directive);
/**
 * manual-focus - a directive that checks when a input has the same value than other
 * @name manual-focus
 * @memberof manualFocus
 * @example
 * ```html
 *     <input manual-focus="{{ vm.focus }}" />
 * ```
 * @return {Directive}  directive definition
 */
 function directive($timeout) {
    return {
        restrict: 'A',
        scope: {
            manualFocus: '@'
        },
        link(scope, element, attrs) {
            attrs.$observe('manualFocus', (value) => {
                if (value === 'true') {
                    $timeout(() => {
                        element[0].focus();
                    });
                }
            });
        }
    };
 }


export default manualFocusModule;
