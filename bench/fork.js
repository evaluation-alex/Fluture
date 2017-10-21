var benchmark = require('benchmark');
var suite = new benchmark.Suite();
var DataTask = require('data.task');
var RamdaFuture = require('ramda-fantasy').Future;
var Fluture = require('..');

var noop = () => {};
var fluture = Fluture((rej, res) => res(1));
var task = new DataTask((rej, res) => res(1));
var future = RamdaFuture((rej, res) => res(1));
var promise = new Promise(res => res(1));

suite.add('Fluture', () => {
  fluture.fork(noop, noop);
});

suite.add('data.task', () => {
  task.fork(noop, noop);
});

suite.add('Ramda Fantasy', () => {
  future.fork(noop, noop);
});

suite.add('Promise', () => {
  promise.then(noop, noop);
});

suite.on('complete', require('./_print'))
suite.run()
