function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const testing = ["testing1", "testing2", "testing3"]
  testing.forEach(callback)
  return testing
}

function doToArray(array, callback) {
  array.forEach(callback)
}