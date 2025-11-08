var arr = [ ['a', 'b'], ['c', 'd'],  ['e', 'f']];
const rr = arr.reduce((acc , val )=> {  return acc.concat(val);  }, [] );
rr;
//
//arr.flat();

