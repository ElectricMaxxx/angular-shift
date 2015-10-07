/// <reference path='../_all.ts' />

module angularShift.shifts {
    export class ShiftsShowController {
        private shiftsService: ShiftsService;
        private $state;
        public shift: ShiftInterface;
        private notificationService: angularShift.utils.NotificationService;
        private confirmation: angularShift.utils.ConfirmationService

        constructor (
            $state,
            shiftsService: ShiftsService,
            notificationService: angularShift.utils.NotificationService,
            confirmationService: angularShift.utils.ConfirmationService
        ) {
            this.shiftsService = shiftsService;
            this.$state = $state;
            this.notificationService = notificationService;
            this.confirmation = confirmationService;

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

        deleteShift (shift: ShiftInterface) {
            this.confirmation.confirm({message: 'Do you really want to delete the shift <b>' + this.buildLabel(shift) + '</b>'}, () => {
                this.shiftsService.remove(shift).then(() => {
                    this.$state.go('shift.calendar');
                }, (error) => {
                    console.log(error);
                    this.notificationService.error('Failed to delete ...', 'Errors while trying to delete shift <b>' + this.buildLabel(shift) + '</b>')
                });

            });
        }

        buildLabel (shift: ShiftInterface) {
            var title = !_.isUndefined(shift.title) && '' !== shift.title && null !== shift.title ? shift.title : null;

            return (null === title) ? shift.shiftType.name : title + ' (' + shift.shiftType.name + ')';
        }
    }

    ShiftsShowController.$inject = ['$state', 'ShiftsService', 'NotificationService', 'ConfirmationService'];

    angular.module('angularShift.shifts').controller('ShiftsShowController', ShiftsShowController);
}
