const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const usersCount = await User.query().resultSize()
  console.log(usersCount)

  // Get the average age of users
  const usersAvgAge = await User.query().avg('age')
  console.log(usersAvgAge[0].avg)

  // Get the total number of dogs
  const dogsCount = await Pet.query().where({ type: 'DOG' }).resultSize()
  console.log(dogsCount)

  // -----
  cleanup()
}

run()
