/// <reference path='_all.ts' />

module angularShift.shifts {
    'use strict';

    export class ShiftsService
    {
        /**
         * @var angularCmf.resource.PhpcrRepoResource
         */
        private Resource;

        /**
         * @var restangular.IElement
         */
        private Restangular;

        static $inject = ['Restangular'];

        constructor(restangular: restangular.IElement) {
            this.Resource = restangular.service('shifts');
            this.Restangular = restangular;
        }

        get(id: string) {
            return this.Resource.one(id).get();
        }

        save(resource) {
            if (!_.isUndefined(resource.id)) {
                return resource.put();
            } else {
                return this.Resource.post(resource);
            }
        }

        getAll() {
            return this.Resource.getList();
        }

        remove(resource) {
            if (null === resource.id && null !== resource.pendingUuid) {
                throw new Error('Can\'t remove the resource at the api - does not exists. (pending uuid set)');
            }

            return resource.remove();
        }
    }

    angular.module('angularShift.shifts').service('ShiftsService', ShiftsService)
}
