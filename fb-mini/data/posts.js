const casual = require('casual')
const userData = require('./users')

casual.define('posts', ({ creatorId }) => ({
  id: casual.uuid,
  userId: creatorId,
  text: casual.sentence,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const postsData = []

for (let i = 0; i < 10; ++i) {
  const creatorId = casual.random_element(userData).id
  postsData.push(casual.posts({ creatorId }))
}

module.exports = postsData
