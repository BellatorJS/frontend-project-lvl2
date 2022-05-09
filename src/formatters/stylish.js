const setIntend = (depth, spaceCount = 4) => ' '.repeat(spaceCount * depth - 2);

const stringify = (data, treeDepth) => {
  if (typeof data !== 'object') {
    return `${data}`;
  }
  if (data === null) {
    return null;
  }
  const lines = Object
    .entries(data)
    .map(([key, value]) => `${setIntend(treeDepth + 1)}  ${key}: ${stringify(value, treeDepth + 1)}`);
  return ['{', ...lines, `${setIntend(treeDepth)}  }`].join('\n');
};

const stylish = (astTree) => {
  const iter = (tree, depth) => tree.map((node) => {
    const buildString = (value, symbol) => `${setIntend(depth)}${symbol} ${node.key}: ${stringify(value, depth)}\n`;
    switch (node.type) {
      case 'added':
        return `${buildString(node.value, '+')}`;
      case 'deleted':
        return `${buildString(node.value, '-')}`;
      case 'changed':
        return `${buildString(node.valueBefore, '-')}${buildString(node.valueAfter, '+')}`;
      case 'unchanged':
        return `${buildString(node.value, ' ')}`;
      case 'nested':
        return ` ${setIntend(depth)} ${node.key}: {\n${iter(node.children, depth + 1).join('')}${setIntend(depth)}  }\n`;
      default:
        throw new Error(`Sorry, this type does not support: ${node.type}\n`);
    }
  });

  return `{\n${iter(astTree, 1).join('')}}`;
};

export default stylish;
