const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const user = await User.query().findById('64beb614-5b85-4862-9e41-5b338b75d485')
  console.log(user)

  // Use that instance to create a new pet related that user
  await user.$relatedQuery('pets').insert({ type: 'DOG', name: 'Bitsy' })

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const userPetsChildren = await user.$fetchGraph('[pets, children]')
  console.log(userPetsChildren)

  // -----
  cleanup()
}

run()
