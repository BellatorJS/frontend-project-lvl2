import _ from 'lodash';

const data11 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};
const data22 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};

const astTree = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (!_.has(data1, key)) {
      return { type: 'added', key, value: value2 };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'deleted', value: value1 };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { key, type: 'nested', children: astTree(value1, value2) };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        type: 'changed', key, valueBefore: value1, valueAfter: value2,
      };
    }

    return ({ key, type: 'unchanged', value: value1 });
  });
};

const getIntend = (depth, spaceCount = 4) => '|'.repeat(spaceCount * depth - 2);

const stringify = (node, depth = 1) => {
  if (!_.isObject(node)) {
    return `${node}`;
  }

  const string = Object.entries(node).map(
    ([key, value]) => `${getIntend(depth)}${key}: ${stringify(value, depth + 1)}`,
  );

  return ['{', ...string, '}'].join("");
};

const stylish = (diffTree) => {
  const iter = (tree, depth) => tree.map((node) => {
   // console.log(`!!!!!!!!!!${node.key} ${node.type}`);
    switch (node.type) {
      case 'added':
        return `${getIntend(depth)}+ ${node.key}: ${stringify(node.value, depth + 1)} \n`;
      case 'nested':
        return `${getIntend(depth+1)}${node.key}: \n${iter(node.children, depth + 1)} \n`;
      case 'deleted':
        return `${getIntend(depth)}- ${node.key}: ${stringify(node.value, depth + 1)} \n`;
      case 'changed':
        return `${getIntend(depth)} ${node.key}: ${stringify(node.valueBefore, depth + 1)}\n${getIntend(depth+1)}+ ${node.key}: ${stringify(node.valueAfter, depth+1)}\n`;
      case 'unchanged':
        return `${getIntend(depth)} ${node.key}: ${node.value}\n`;
      default:
        throw new Error(`This type does not exist: ${node.type}\n`);
    }
  });
  return `{\n${iter(diffTree, 1).join("")}}`;
};
const TREE = astTree(data11, data22);
console.log(stylish(TREE));
// console.dir(stylish(cc), { depth: null });
