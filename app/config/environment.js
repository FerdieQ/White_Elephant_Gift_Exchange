var _ = require('lodash');

var localEnvVars = {
  TITLE:      'White_Elephant_Gift_Exchange',
  SAFE_TITLE: 'White_Elephant_Gift_Exchange'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
