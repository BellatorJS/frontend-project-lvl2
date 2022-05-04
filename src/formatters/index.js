import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (astTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(astTree);
    case 'plain':
      return plain(astTree);
    case 'json':
      return json(astTree);
    default:
      throw new Error('Sorry, this format is not supported');
  }
};
