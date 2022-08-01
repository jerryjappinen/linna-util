const path = require('path')
const mv = require('mv')

// Upon install, move all files under src/ to the root folder
mv(path.resolve(__dirname, '../dist'), path.resolve(__dirname, '../'), {
  mkdirp: false,
  clobber: false
}, (err) => {
  if (err) {
    throw err
  }
})
