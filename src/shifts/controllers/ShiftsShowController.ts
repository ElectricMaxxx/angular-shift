/// <reference path='../_all.ts' />

module angularShift.shifts {
    export class ShiftsShowController {
        private shiftsService: ShiftsService;
        private $state;
        public shift: ShiftInterface;

        constructor ($state, shiftsService: ShiftsService) {
            this.shiftsService = shiftsService;
            this.$state = $state;

            this.init();
        }

        private init() {
            var shiftid = this.$state.params.id;
            this.shiftsService.getById(shiftid).then((shift: ShiftInterface) => {
                this.shift = shift;
            });
        }

        countShiftEntriesForAngelType (shift: ShiftInterface, angelTypeId) {
            var count = 0;
            _.each(shift.shiftEntries, (entry: angularShift.shiftEntries.ShiftEntryInterface) => {
               if (entry.angelType.id === angelTypeId) {
                    count++;
               }
            });
            return count;
        }

        getPercentage (now, max) {
            var relation = now/max*100;

            return Math.round(relation);
        }
    }

    ShiftsShowController.$inject = ['$state', 'ShiftsService'];

    angular.module('angularShift.shifts').controller('ShiftsShowController', ShiftsShowController);
}
