/// <reference path='../_all.ts' />

module angularShift.shifts {
    export class ShiftEventConverter {
        public toEvent (shift: ShiftInterface): FullCalendar.EventObject {
            var startDate = new Date();
            // startDate.setTime(shift.start * 1000);
            startDate.setMilliseconds(startDate.getMilliseconds() + 60*60*1000*1);
            var endDate = new Date();
            endDate.setMilliseconds(endDate.getMilliseconds() + 60*60*1000*3);
            // endDate.setTime(shift.end * 1000);
            return  {
                title: !_.isUndefined(shift.title) ?  shift.title + '(' + shift.shiftType.name +  ')' : shift.shiftType.name,
                start: startDate,
                end: endDate,
                shiftValues: shift
            };
        }
    }

    angular.module('angularShift.shifts').service('ShiftsEventConverterService', ShiftEventConverter)
}
