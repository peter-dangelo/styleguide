export default (array) => {
  const obj = {};
  array.forEach((value) => obj[value] = value);

  return obj;
}
