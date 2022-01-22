const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const newUser = await User.query().insertGraph({
    email: 'peter_bynum@gmail.com',
    firstName: 'Peter',
    lastName: 'Bynum',
    age: 20,
    pets: [
      {
        type: 'DOG',
        name: 'Rocco',
      },
      {
        type: 'DOG',
        name: 'Rosey',
      },
    ],
  })
  console.log(newUser)

  // -----
  cleanup()
}

run()
