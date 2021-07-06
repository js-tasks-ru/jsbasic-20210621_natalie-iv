function camelize(str) {
  return str.replace(/-/g, "-:")
            .split('-')
            .map(item => {
              if (item.charAt(0) === ':') {
                return item.substr(1).charAt(0).toUpperCase() + item.slice(2);
              } else {
                return item;
              }})
            .join('');
}
