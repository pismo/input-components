import angular from 'angular';

/**
 * angular module to help to to trigger the input focus
 * @namespace withFocus
 */
const withFocusModule = angular
    .module('withFocus', [])
      .directive('withFocus', ['$timeout', directive]);
/**
 * with-focus - a directive that triggers the input focus depending on the state of it's value
 * @name with-focus
 * @memberof withFocus
 * @example
 * ```html
 *     <input with-focus="{{ vm.focus }}" />
 * ```
 * @return {Directive}  directive definition
 */
function directive($timeout) {
    return {
        restrict: 'A',
        scope: {
            withFocus: '@'
        },
        link(scope, element, attrs) {
            attrs.$observe('withFocus', (value) => {
                if (value === 'true') {
                    $timeout(() => {
                        element[0].focus();
                    });
                }
            });
        }
    };
}


export default withFocusModule;
