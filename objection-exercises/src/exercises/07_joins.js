const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersAndPets = await User.query()
    .withGraphFetched('pets')
  console.log(usersAndPets)

  // Get all users, their pets, AND their children
  const usersPetsChildren = await User.query()
    .withGraphFetched('pets')
    .withGraphFetched('children')
  console.log(usersPetsChildren)

  // Get all users, their parents, and their grandparents
  const usersParentsGrandparents = await User.query()
    .withGraphFetched('parents')
    .withGraphFetched('parents.parents')
  console.log(usersParentsGrandparents)

  // Get all users, their pets, their chilren, and their childrens' pets
  const usersPetsChildrenPets = await User.query()
    .withGraphFetched('pets')
    .withGraphFetched('children')
    .withGraphFetched('children.[pets]')
  console.log(usersPetsChildrenPets)

  // -----
  cleanup()
}

run()
