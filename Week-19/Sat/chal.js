const fn = () => {

}

const f1 = (a) => {
  if (typeof(fn) === 'undefined') {
    var fn = x => x+a
  } else {
    var fn = x => x-a
  }

  return fn(a);
}

console.log( f1(1) );
