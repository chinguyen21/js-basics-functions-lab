// Code your solution in this file!

const distanceFromHqInBlocks = (num) => Math.abs(num - 42)


const distanceFromHqInFeet = (num) => distanceFromHqInBlocks(num) * 264


const distanceTravelledInFeet = (from, to) => Math.abs(to - from) * 264

const calculatesFarePrice = (from, to) => {
  const feet = distanceTravelledInFeet(from, to)
  if (feet <= 400) {
    return 0
  } else if (feet > 400 && feet < 2000) {
    return (feet - 400) * 2 / 100
  } else if (feet > 2000 && feet < 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}

console.log(calculatesFarePrice(34,32));