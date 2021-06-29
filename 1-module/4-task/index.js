function checkSpam(str) {
  return Boolean(str.toLowerCase().match(/1xbet|xxx/));
}

//todo: Я решила приводить значение к нижнему регистру, чтобы исключить чувствительность к регистру в проверке
