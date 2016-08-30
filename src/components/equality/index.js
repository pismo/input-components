const angular = require('angular');
const { getPath } = require('../../utils');

/**
 * angular module to help to validate when one input has the same value than other
 * @namespace inputEquality
 */
const equalityModule = angular
    .module('inputEquality', [])
    .directive('inputEquality', equality);

/**
 * input-equality - a directive that checks when a input has the same value than other
 * @name input-equality
 * @memberof inputEquality
 * @example
 * ```html
 *   <form name="user">
 *     <input name="password" ng-model="vm.password" />
 *     <input name="confirm_password" ng-model="vm.confirm_password" input-equality="vm.password" />
 *     <div ng-messages="user.confirm_password.$error" ng-if="user.confirm_password.$touched">
 *       <div ng-message="equality">The field must be equal to password</div>
 *     </div>
 *   </form>
 * ```
 * @return {Directive}  directive definition
 */
function equality() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link(scope, element, attrs, ngModel) {
            const attr = attrs.inputEquality;

            if (!attr) {
                throw new Error('missing input-equality attribute value');
            }

            ngModel.$validators.equality = (viewValue, modelValue) => {
                const value = viewValue || modelValue || '';
                const confirmationValue = getPath(scope, attr);

                return value === confirmationValue;
            };

            scope.$watch(attr, () => ngModel.$validate());
        }
    };
}

module.exports = equalityModule;
