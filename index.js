// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (muliplyValue) {
    return function (value) {
        return muliplyValue * value
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,func){
    return func(drivers);
}