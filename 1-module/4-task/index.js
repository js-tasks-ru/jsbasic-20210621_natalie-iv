function checkSpam(str) {
  if (str.toLowerCase().match(/1xbet|xxx/)) {
    return true;
  } else {
    return false;
  }
}

//todo: Я решила приводить значение к нижнему регистру, чтобы исключить чувствительность к регистру в проверке
