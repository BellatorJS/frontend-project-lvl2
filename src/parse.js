import yaml from 'js-yaml';

export default (format, data) => {
  switch (format) {
    case 'yml':
      return yaml.load(data);
    case 'yaml':
      return yaml.load(data);
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Sorry, this  format .${format} does not support`);
  }
};
