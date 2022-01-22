const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const person = await User.query().first()
  console.log(person.fullName)

  // -----
  cleanup()
}

run()
