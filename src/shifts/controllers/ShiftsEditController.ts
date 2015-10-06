/// <reference path='../_all.ts' />

module angularShift.shifts {
    export class ShiftsEditController {
        public text: string;
        constructor () {
            this.text = "Lore ipsum und so weiter";
        }
    }

    angular.module('angularShift.shifts').controller('ShiftsEditController', ShiftsEditController);
}
