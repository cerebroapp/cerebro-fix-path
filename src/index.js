'use strict';
const fixPath = require('fix-path')

const initialize = () => {
  fixPath()
}

const plugin = ({term, display, actions}) => {
}

module.exports = {
  initialize: initialize,
  fn: plugin
}
