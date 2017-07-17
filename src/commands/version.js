import log from 'loglevel'
import helper from './../helper'

const cmd = {
  command: 'version',
  desc: '版本',
  builder: {},
  handler () {
    const version = require('../../package.json').version
    if (log.getLevel() >= log.levels.INFO) {
      return log.info(version)
    }
    const logo = 'CLI v' + version
    log.debug(logo)
    // helper
  }
}

export default cmd
