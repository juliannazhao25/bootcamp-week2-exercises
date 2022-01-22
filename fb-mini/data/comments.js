const casual = require('casual')
const userData = require('./users')
const postsData = require('./posts')

casual.define('comments', ({ userId, thisPostId }) => ({
  id: casual.uuid,
  commenterId: userId,
  postId: thisPostId,
  comment: casual.sentence,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const commentsData = []

for (let i = 0; i < 15; ++i) {
  const userId = casual.random_element(userData).id
  const thisPostId = casual.random_element(postsData).id
  commentsData.push(casual.comments({ userId, thisPostId }))
}

module.exports = commentsData
