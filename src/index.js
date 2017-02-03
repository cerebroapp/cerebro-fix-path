'use strict';
const fixPath = require('fix-path')

const plugin = ({term, display, actions}) => {
  fixPath()
};

module.exports = {
  fn: plugin
}
