// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    IteratorClose is invoked when evaluation of AssignmentElementList returns
    a "throw" completion and the iterator has not been marked as "done"
info: |
    ArrayAssignmentPattern :
        [ AssignmentElementList , Elisionopt AssignmentRestElementopt ]

    [...]
    3. Let iteratorRecord be Record {[[iterator]]: iterator, [[done]]: false}.
    4. Let status be the result of performing
       IteratorDestructuringAssignmentEvaluation of AssignmentElementList using
       iteratorRecord as the argument.
    5. If status is an abrupt completion, then
       a. If iteratorRecord.[[done]] is false, return IteratorClose(iterator,
          status).

    7.4.6 IteratorClose( iterator, completion )

    [...]
    7. If completion.[[type]] is throw, return Completion(completion).

features: [Symbol.iterator]
es6id: 12.14.5.2
esid: sec-runtime-semantics-destructuringassignmentevaluation
---*/

var nextCount = 0;
var returnCount = 0;
var iterable = {};
var thrower = function() {
  throw new Test262Error();
};
function ReturnError() {}
var iterator = {
  next: function() {
    nextCount += 1;
    return { done: true };
  },
  return: function() {
    returnCount += 1;

    // This value should be discarded.
    throw new ReturnError();
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};

assert.throws(Test262Error, function() {
  [ {}[thrower()] , ] = iterable;
});

assert.sameValue(nextCount, 0);
assert.sameValue(returnCount, 1);
