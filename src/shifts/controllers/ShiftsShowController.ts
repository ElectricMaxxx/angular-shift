/// <reference path='../_all.ts' />

module angularShift.shifts {
    export class ShiftsShowController {
        private shiftsService: ShiftsService;
        private $state;
        public shift: ShiftInterface;
        private notificationService: angularShift.utils.NotificationService;

        constructor ($state, shiftsService: ShiftsService, notificationService: angularShift.utils.NotificationService) {
            this.shiftsService = shiftsService;
            this.$state = $state;
            this.notificationService = notificationService;

            this.init();
        }

        private init() {
            var shiftid = this.$state.params.id;
            // Todo Remove that hint, when ready
            this.notificationService.warning(
                'WORK IN PROGRESS',
                'This feature isn`t finally implemented yet. Use <a href="/?p=shifts&action=view&shift_id=' + shiftid + '">Link (shift view)</a> instead'
            );

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

    ShiftsShowController.$inject = ['$state', 'ShiftsService', 'NotificationService'];

    angular.module('angularShift.shifts').controller('ShiftsShowController', ShiftsShowController);
}
