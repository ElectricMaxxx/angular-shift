# AngularShift

## Purpose 

In the muccc/engelsystem repository we do need a better shifts view. So this repository will try to 
create a complete angularJS application to show/edit/delete shifts, shift entries and rooms by one single
page application.

## API

This would be the first try to describe the API i would need. In generall we should make all GET stuff first
to create the first view. For the beginning i would mock the api as described here:

### Shifts

* GET /api/shifts
* GET /api/shifts/{id}
* PATCH /api/shifts/{id} (name, start, end)
* POST /api/schifts

### ShiftsEntry

* GET /api/shift_entries
* GET /api/shift_entries/{id}
* PUT /api/shift_entries/{id}
* DELETE /api/shift_entries/{id}

### ShiftsType

* GET /api/shift_types
* GET /api/shift_types/{id}

(start with the GET only)

### ShiftsType

* GET /api/locations
* GET /api/locations/{id}
* GET /api/locations/{id}/shifts
