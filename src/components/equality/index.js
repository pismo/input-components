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
            let attr = attrs.inputEquality;

            ngModel.$validators.equality = (viewValue, modelValue) => {
                let value;
                let confirmationValue;

                if (!attr) return false;

                value = viewValue || modelValue || '';
                confirmationValue = getPath(scope, attr);

                return value === confirmationValue;
            };

            scope.$watch(attr, () => ngModel.$validate());
        }
    };
}

export default equalityModule;
