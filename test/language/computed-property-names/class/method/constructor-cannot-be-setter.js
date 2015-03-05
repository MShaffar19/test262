// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.5.3
description: >
    computed property setter names cannot be "constructor"
negative: SyntaxError
---*/
class C4 {
  set ['constructor'](_) {}
}
