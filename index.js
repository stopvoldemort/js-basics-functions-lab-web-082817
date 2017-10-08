// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  if (pickup >= 42) {
    return (pickup - 42)
  } else {
    return (42-pickup)
  }
}

function distanceFromHqInFeet(pickup) {
  return (distanceFromHqInBlocks(pickup) * 264)
}

function distanceTravelledInFeet(start, end) {
  let distance
  if (start <= end) {
    distance = (end - start)
  } else {
    distance = (start - end)
  }
  return distance * 264
}

function calculatesFarePrice(start, end) {
  distance = distanceTravelledInFeet(start, end)
  if (distance < 400) {
    return 0
  } else if (distance <= 2000) {
    return (distance * 0.02)
  } else if (distance < 2500) {
    return 25
  } else if (distance >= 2500) {
    return "cannot travel that far"
  }
}
