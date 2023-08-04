const path = require('path');
const docgen = require('react-docgen-typescript');
const options = path.join(process.cwd(), 'tsconfig.json');
const tsConfigParser = docgen.withCustomConfig(options, {
  savePropValueAsString: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: (prop) => {
    if (prop.parent) {
      return !prop.parent.fileName.includes('node_modules');
    }
    return true;
  },
});

const parseTs = (path, callback) => {
  const docs = tsConfigParser.parse(path, {
    savePropValueAsString: true,
  });
  let result;
  if (docs && docs.length) {
    docs.forEach((doc) => {
      if (doc && doc.props) {
        const keys = Object.keys(doc.props);
        if (keys.length) {
          result = callback({
            keys,
            props: doc.props,
            path,
          });
        }
      }
    });
  }
  return result;
};

module.exports = {
  parseTs,
};
