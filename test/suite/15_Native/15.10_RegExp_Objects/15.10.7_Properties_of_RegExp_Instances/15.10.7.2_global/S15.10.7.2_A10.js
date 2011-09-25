// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp instance global property has the attribute ReadOnly
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.7_Properties_of_RegExp_Instances/15.10.7.2_global/S15.10.7.2_A10.js
 * @description Checking if varying the global property fails
 */

__re = /^|^/;

//CHECK#1
if (__re.hasOwnProperty('global') !== true) {
  $FAIL('#1: __re = /^|^/; __re.hasOwnProperty(\'global\') === true');
}

__obj = __re.global;

__re.global = "shifted";

//CHECK#2
if (__re.global !== __obj) {
  $ERROR('#2: __re = /^|^/; __obj = __re.global; __re.global = "shifted"; __re.global === __obj. Actual: ' + (__re.global));
}

