const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const usersWithName = await User.query().where('firstName', 'Larissa').where('lastName', 'Wilkinson')
  console.log(usersWithName)

  // Do the same with object notation
  const usersWithName2 = await User.query().where({ firstName: 'Larissa' }, { lastName: 'Wilkinson' })
  console.log(usersWithName2)

  // Get all DOGS and BIRDS
  const dogsAndBirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogsAndBirds)

  // -----
  cleanup()
}

run()
