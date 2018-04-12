const path = require('path')

module.exports = env => ({
  context: path.resolve(__dirname, 'app'),

  entry: {
    vendor: './vendor.ts',
    app: [/*'react-hot-loader/patch', */'./App.tsx'],
  },

})