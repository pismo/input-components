import angular from 'angular';

angular
    .module('inputValidations')
    .directive('equality', equality);

function equality() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, element, attrs, ngModel) => {
            let attr = attrs.passwordEquality;

            ngModel.$validators.equality = (viewValue, modelValue) => {
                let value;
                let confirmationValue;

                if(attr === "") return false;

                value = viewValue || modelValue || '';
                confirmationValue = scope.$eval(attr);

                return value === confirmationValue;
            };

            scope.$watch(attr, (test)=>{
                ngModel.$validate();
            });
        }
    };
}
