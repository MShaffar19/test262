// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-function-definitions-runtime-semantics-instantiatefunctionobject
description: Function.prototype.toString line terminator normalisation (LF)
info: >
  Function.prototype.toString should normalise line terminator sequences to Line Feed characters.
  This file uses Line Feed characters as line terminators.
---*/

// before
function
// a
f
// b
(
// c
x
// d
,
// e
y
// f
)
// g
{
// h
;
// i
;
// j
}
// after

assert.sameValue(f.toString(), "function\n// a\nf\n// b\n(\n// c\nx\n// d\n,\n// e\ny\n// f\n)\n// g\n{\n// h\n;\n// i\n;\n// j\n}");
