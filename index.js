const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2)
}

const returnLastTwoDrivers = (array) => {
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier = (int) => {
  return function fareMultiplier(fare) {
    return int * fare;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers,driverfunctions) => {
  return driverfunctions(drivers)
}