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
//tostring
var tstring = alpha.toString();
console.log(tstring);
//creation of arrays

var x = [1,2,3];
var y = Array(length=5);
var z = new Array('a','v'); 
console.log(x);
console.log(y);
console.log(z);

