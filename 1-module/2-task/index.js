function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name === null) {
    return false;
  } else {
    return name && name.length > 3 && !/\s/.test(name);
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
