/// <reference path='../_all.ts' />

module angularShift.shifts {
    export class ShiftsEditController {
        public text: string;
        constructor () {
            this.text = 'Edit a shift it self';
        }
    }

    angular.module('angularShift.shifts').controller('ShiftsEditController', ShiftsEditController);
}
