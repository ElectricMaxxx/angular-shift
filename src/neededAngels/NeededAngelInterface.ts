/// <reference path='_all.ts' />

module angularShift.neededAngels {

    /**
     * The needed angels we are getting from the API.
     */
    export interface NeededAngelInterface {
        id: number;
        name: string;
        location: angularShift.locations.LocationInterface;
        angelType: AngelType;
        count: number;
    }
}
