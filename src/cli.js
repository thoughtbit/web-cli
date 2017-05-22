import fs from 'fs'
import log from 'loglevel'
import chalk from 'chalk'
import helper from './helper'

function setLogLevel () {
  let level = log.levels.INFO
  if (process.argv.indexOf('-v') >= 0) level = log.levels.DEBUG
  if (process.argv.indexOf('-vv') >= 0) level = log.levels.TRACE

  log.setLevel(level)

  log.fail = function (e) {
    log.error(chalk.red('ERROR: ' + (e.msg || e)))
  }
}

module.exports = {
  run () {
    setLogLevel()

    process.stdout.on('error', (e) => {
      if (e.code === 'EPIPE') process.exit(0)
    })

    require('yargs')
      .commandDir('commands')
      .completion()
      .help()
      .strict()
      .argv
  }
}
