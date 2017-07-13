const { fork } = require('child_process');
global.counter = 0;
let forks = [];
forks[1] = fork('child1.js');
forks[2] = fork('child2.js');

setInterval(() => {
  let count = global.counter++;
  forks.map(function (forked) {
  	
  	forked.send({ counter:  count});	
  })
}, 1000);