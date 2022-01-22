const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  username: casual.username,
  hashedPassword: casual.password,
  firstName: casual.first_name,
  lastName: casual.last_name,
  email: casual.email,
  bio: casual.string,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
