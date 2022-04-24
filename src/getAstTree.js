import _ from 'lodash';

const getAstTree = (data1, data2) => {
  const key1 = _.keys(data1);
  const key2 = _.keys(data2);
  const unionKeys = _.union(key1, key2);
  const keys = _.sortBy(unionKeys);

  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: value2 };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'deleted', value: value1 };
    }
    if ((_.isPlainObject(value1)) && _.isPlainObject(value2)) {
      return { key, type: 'nested', children: getAstTree(value1, value2) };
    }

    if (!_.isEqual(value1, value2)) {
      return {
        key, type: 'changed', valueBefore: value1, valueAfter: value2,
      };
    }

    return { key, type: 'unchanged', value: value1 };
  });
};
export default getAstTree;
