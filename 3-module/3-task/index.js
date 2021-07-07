function camelize(str) {
  if (str.charAt(0) === '-') {
    return str.split('-').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('');
  } else {
    return str.split('-').map((item, index) => index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1)).join('');
  }
}
// todo: Изменила на решение с index === 0, я просто не знаю как еще это решить. Чтобы результат был такой как на примерах:
// camelize('background-color') == 'backgroundColor';
// camelize('list-style-image') == 'listStyleImage';
// camelize('-webkit-transition') == 'WebkitTransition';
