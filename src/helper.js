import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

export default {
  getFileData (path) {
    return fs.existsSync(path) ? fs.readFileSync(path).toString() : null
  },
  getFilename (fullpath) {
    return path.basename(fullpath, path.extname(fullpath))
  },
  getHomeDir () {
    return process.env.HOME || process.env.USERPROFILE
  }
}
