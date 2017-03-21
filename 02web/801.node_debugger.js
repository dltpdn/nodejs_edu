var a =0;

function init(){
a = 1;
}

function incr(){
var a = a + 1;
}

init();
console.log('a init :' + a);

incr();
console.log('a last :' + a);

/*

$ node debug debugg.js

help
(n)ext
(s)tep in
(bt)backtrace
watch(‘a’)
watchers
n
n
sb(setbreakpoint) : sb(‘debugg.js’, 8)
c(cont-inue)
repl

*/