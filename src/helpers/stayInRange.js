export default (a, b) => {
  const min = a < b ? a : b;
  const max = a < b ? b : a;
  return (val) => {
    return Math.min(max, Math.max(min, val));
  }
}
