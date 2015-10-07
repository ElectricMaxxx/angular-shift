/// <reference path='../_all.ts' />

module angularShift.shifts {
    export class ShiftsDeleteController {
        private notificationService: angularShift.utils.NotificationService;
        private $state;

        constructor (notificationService: angularShift.utils.NotificationService, $state) {
            this.notificationService = notificationService;
            this.$state = $state;
            this.init();
        }

        private init() {
            var shiftid = this.$state.params.id;
            this.notificationService.warning(
                'WORK IN PROGRESS',
                'This feature isn`t implemented yet. Use <a href="/?user_shifts&shift_delete=' + shiftid + '">Link (delete shift)</a> instead'
            );
        }
    }
    ShiftsDeleteController.$inject = ['NotificationService', '$state'];

    angular.module('angularShift.shifts').controller('ShiftsDeleteController', ShiftsDeleteController);
}
