const casual = require('casual')
const userData = require('./users')

casual.define('friends', ({ user1Id, user2Id }) => ({
  id: casual.uuid,
  user1: user1Id,
  user2: user2Id,
  status: casual.random_element(['accepted', 'rejected', 'pending']),
}))

const friendsData = []

for (let i = 0; i < 10; ++i) {
  const user1Id = casual.random_element(userData).id
  const user2Id = casual.random_element(userData).id
  friendsData.push(casual.friends({ user1Id, user2Id }))
}

module.exports = friendsData
