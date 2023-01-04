module.exports = function reverse (n) {
  var i;
  var n_reverse = '';
  n = String(n);
  for (i=n.length -1; i>=0; i--) {
    if (n[i]!='-') {
    n_reverse = n_reverse + n[i];
    }
  }
  return Number(n_reverse);
}

