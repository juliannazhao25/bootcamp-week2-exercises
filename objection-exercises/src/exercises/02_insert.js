const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const addedUser = await User.query().insert({
    email: 'myemail@gmail.com',
    firstName: 'Julianna',
    lastName: 'Zhao',
    age: 18,
  }).returning('*')
  console.log(addedUser)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const myId = await User.query().select('id').where({ firstName: 'Julianna' }, { lastName: 'Zhao' })
  const addedPet = await Pet.query().insert({
    ownerId: myId[0].id,
    type: 'DOG',
    name: 'Dash',
  }).returning('*')
  console.log(addedPet)

  // -----
  cleanup()
}

run()
