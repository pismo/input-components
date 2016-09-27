import angular from 'angular';

/**
 * angular module to help to to trigger the input focus
 * @namespace manualFocus
 */
const manualFocusModule = angular
    .module('manualFocus', [])
    .directive('manualFocus', directive);
/**
 * manual-focus - a directive that triggers the input focus depending on the state of it's value
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
