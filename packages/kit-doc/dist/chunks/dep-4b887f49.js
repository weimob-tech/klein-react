'use strict';

function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    var e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (var k in e) {
      if (k !== 'default' && !(k in n)) {
        n[k] = e[k];
      }
    } }
  }
  return n;
}

var mdastUtilToString = toString;

// Get the text content of a node.
// Prefer the node’s plain-text fields, otherwise serialize its children,
// and if the given value is an array, serialize the nodes in it.
function toString(node) {
  return (
    (node &&
      (node.value ||
        node.alt ||
        node.title ||
        ('children' in node && all(node.children)) ||
        ('length' in node && all(node)))) ||
    ''
  )
}

function all(values) {
  var result = [];
  var index = -1;

  while (++index < values.length) {
    result[index] = toString(values[index]);
  }

  return result.join('')
}

var index = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: mdastUtilToString
}, [mdastUtilToString]);

exports.index = index;
