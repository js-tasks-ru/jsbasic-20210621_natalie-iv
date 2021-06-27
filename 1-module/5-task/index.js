function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let stringTruncated = str.slice(0, (maxlength - 1)) + '…';
    console.log(stringTruncated);
    return stringTruncated;
  } else {
    return str;
  }
}
