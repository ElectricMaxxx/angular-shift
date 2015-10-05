/// <reference path='_all.ts' />

module angularShift.shifts {
    export class ShiftsOnCalendarController {
        private date: Date;
        private d: number;
        private m: number;
        private y: number;
        private events: Array<FullCalendar.EventObject> = [];
        private uiCalendarConfig: FullCalendar.Options;
        private eventSources: Array<FullCalendar.EventSource>;
        private shiftsService: ShiftsService;
        private converter: ShiftEventConverter;

        constructor(uiCalendarConfig, $scope, shiftsService: ShiftsService, converter: ShiftEventConverter) {
            this.date = new Date();
            this.d = this.date.getDate();
            this.m = this.date.getMonth();
            this.y = this.date.getFullYear();

            this.uiCalendarConfig = uiCalendarConfig;
            this.shiftsService = shiftsService;
            this.converter = converter;
            this.eventSources = [];

            $scope.uiConfig = {
                calendar:{
                    height: 450,
                    editable: true,
                    header:{
                        left: 'month agendaWeek agendaDay',
                        center: 'title',
                        right: 'today prev,next'
                    },
                    dayClick: $scope.alertEventOnClick,
                    eventDrop: $scope.alertOnDrop,
                    eventResize: $scope.alertOnResize
                }
            };

            this.init();
        }

        init () {
            this.eventSources = [this.events];
            this.shiftsService.getAll().then((data) => {
                _.each(data, (shift: ShiftInterface) => {
                    this.events.push(this.converter.toEvent(shift))
                });
            });
        }

    }

    ShiftsOnCalendarController.$inject = ['uiCalendarConfig', '$scope', 'ShiftsService', 'ShiftsEventConverterService'];

    angular.module('angularShift.shifts').controller('ShiftsOnCalendarController', ShiftsOnCalendarController);
}
