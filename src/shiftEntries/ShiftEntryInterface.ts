/// <reference path='_all.ts' />

module angularShift.shiftEntries {

    /**
     * The interface for the shift entries we are getting from the api.
     */
    export interface ShiftEntryInterface {
        id : number;
        SID: number;
        TID : number;
        UID : number;
        Comment: string;
        freeload_comment:string;
        freeloaded: number;
    };
};
