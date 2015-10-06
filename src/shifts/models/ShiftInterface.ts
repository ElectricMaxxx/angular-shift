/// <reference path='../_all.ts' />

module angularShift.shifts {

    /**
     * The interface for the shifts we are getting from the api.
     */
    export interface ShiftInterface {
        SID: number;
        title: string;
        shifttype_id: number;
        shiftType: string;
        start: number;
        end: number;
        RID: number;
        URL: string;
        PSID : number;
        created_by_user_id: number;
        created_at_timestamp: number;
        edited_by_user_id: number;
        edited_at_timestamp: number;
    }
}
