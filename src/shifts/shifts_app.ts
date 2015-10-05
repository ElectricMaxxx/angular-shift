/// <reference path='_all.ts' />

/**
 * The main application file
 *
 * @todo Remove cause its a lib
 *
 * @type {angular.Module}
 */
module angularShift.shifts {
    'use strict';

    angular
        .module('angularShift.shifts', ['ui.calendar', 'ui.router'])
        .config(function($stateProvider) {
            $stateProvider
                .state('shifts', {
                    url: "/shifts",
                    views: {
                        calendar: {
                            templateUrl: "partials/shifts/calendar.html",
                            controller: "ShiftsOnCalendarController",
                            controllerAs: 'shiftsOnCalendar'
                        }
                    }
                })
                .state('shifts_edit', {
                    url: "/shifts/edit/{id:int}",
                    views: {
                        "shiftsEdit": {
                            templateUrl: "partials/shifts/edit.html",
                            controller: "ShiftsEditController",
                            controllerAs: 'shiftsEdit'
                        }
                    }
                })
            ;
        })
    ;
}
