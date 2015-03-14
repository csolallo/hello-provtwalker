"format global";
"deps ./c";
var main = 'main';

['a', 'b', 'c'].forEach(function(global){
  console.log(global + ':' + window[global])
});
