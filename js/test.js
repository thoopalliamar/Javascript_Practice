//array initialization from arrays
console.log(Array.from(['123'], x => x + x ));

console.log(Array.from('amar'));


//concatination
var alpha=["a","b","c"];
var num = [1,2,3]
var concata = alpha.concat(num);
console.log(concata); 
//unshift
var ushift = alpha.unshift("a");
console.log(alpha);
//shift
var shift = alpha.shift("a");
console.log(alpha);

