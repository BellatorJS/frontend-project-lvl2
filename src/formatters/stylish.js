const indent = (depth, spaceCount = 4) => ' '.repeat(spaceCount * depth - 2);
const stringify = (data, treeDepth) => {
  if (typeof data !== 'object') {
    return `${data}`;
  }
  if (data === null) {
    return null;
  }
  const lines = Object
    .entries(data)
    .map(([key, value]) => `${indent(treeDepth + 1)}  ${key}: ${stringify(value, treeDepth + 1)}`);
  return ['{', ...lines, `${indent(treeDepth)}  }`].join('\n');
};
const stylish = (diffTree) => {
  const buildString = (tree, depth) => tree.map((node) => {
    const getValue = (value, sign) => `${indent(depth)}${sign} ${node.key}: ${stringify(value, depth)}\n`;
    switch (node.type) {
      case 'added':
        return getValue(node.val, '+');
      case 'deleted':
        return getValue(node.val, '-');
      case 'unchanged':
        return getValue(node.val, ' ');
      case 'changed':
        return `${getValue(node.valueBefore, '-')}${getValue(node.valueAfter, '+')}`;
      case 'nested':
        return `${indent(depth)}  ${node.key}: {\n${buildString(node.children, depth + 1).join('')}${indent(depth)}  }\n`;
      default:
        throw new Error(`This type does not exist: ${node.type}`);
    }
  });
  return `{\n${buildString(diffTree, 1).join('')}}`;
};

export default stylish;
