function past(h, m, s) {
  let result = 0;

  result += h * 3600000;
  result += m * 60000;
  result += s * 1000;

  return result;
}
