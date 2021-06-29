function checkSpam(str) {
  return str.toLowerCase().match(/1xbet|xxx/) ? true : false;
}

//todo: Я решила приводить значение к нижнему регистру, чтобы исключить чувствительность к регистру в проверке
