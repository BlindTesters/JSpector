// Inject a wrapper around the function in the class we want to inspect.
const JSpector = require('../../jspector');

const jspector = new JSpector(
  'crypto',
  'pbkdf2Sync',
  'crypt'
);

jspector.start();
