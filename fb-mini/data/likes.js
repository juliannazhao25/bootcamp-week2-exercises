const casual = require('casual')
const userData = require('./users')
const postsData = require('./posts')

casual.define('likes', ({ thisUserId, thisPostId }) => ({
  id: casual.uuid,
  userId: thisUserId,
  postId: thisPostId,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const likesData = []

for (let i = 0; i < 30; ++i) {
  const thisUserId = casual.random_element(userData).id
  const thisPostId = casual.random_element(postsData).id
  likesData.push(casual.likes({ thisUserId, thisPostId }))
}

module.exports = likesData
