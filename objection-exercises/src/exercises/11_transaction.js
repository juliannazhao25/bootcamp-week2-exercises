const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

  try {
    const transaction = await User.transaction(async trx => {
      const newUser = await User.query(trx)
        .insert({
          email: 'abcde@gmail.com',
          firstName: 'Alice',
          lastName: 'Bo',
          age: 19,
        }).returning('*')
      console.log(newUser)
      const pet = await newUser.$relatedQuery('pets', trx)
        .insert({ type: 'DOG', name: 'Holly' })
      console.log(pet)
      const petsCount = await Pet.query().resultSize()
      console.log(petsCount)
      if (petsCount > 10) {
        await Pet.query().delete().where({ type: 'BIRD' })
      }
      // throw new Error("This is an error")
    })
    cleanup()
  } catch (err) {
    console.log(err)
    cleanup()
  }
  // -----
}

run()
