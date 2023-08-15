const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft < distanceToPump) {
    return false;
  } else {
    return true;
  }
};
