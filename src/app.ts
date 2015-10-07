/// <reference path='_all.ts' />

/**
 * The main application file
 *
 * @todo Remove cause its a lib
 *
 * @type {angular.Module}
 */
module angularShift {
    'use strict';

    angular
        .module('angularShift', [
            'restangular',
            'angularShift.shifts',
            'angularShift.shiftEntries',
            'angularShift.utils.notification',
            'ui.router',
            'toastr'
        ])
        .config(function(RestangularProvider) {
            RestangularProvider.setEncodeIds(false);
            RestangularProvider.setBaseUrl('api');
            RestangularProvider.setRequestSuffix('.json');
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/user_shifts/calendar");
        });
}
