import angular from 'angular';
import { getPath } from '../../utils';

const equalityModule = angular
    .module('inputEquality', [])
    .directive('inputEquality', equality);

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

export default equalityModule;
