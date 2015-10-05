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
            'ui.router'
        ])
        .config(function(RestangularProvider) {
            RestangularProvider.setEncodeIds(false);
            RestangularProvider.setBaseUrl('api');
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/shifts");
        });
}
