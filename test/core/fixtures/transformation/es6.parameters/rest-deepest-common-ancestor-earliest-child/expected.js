// single referenes
"use strict";

function r() {
  if (noNeedToWork) return 0;

  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  return rest;
}

// multiple references
function r() {
  if (noNeedToWork) return 0;

  for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rest[_key2] = arguments[_key2];
  }

  rest;
  rest;
}

// multiple nested references
function r() {
  if (noNeedToWork) return 0;

  for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    rest[_key3] = arguments[_key3];
  }

  if (true) {
    return rest;
  } else {
    return rest;
  }
}

// deeply nested
function r() {
  if (true) {
    for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      rest[_key4] = arguments[_key4];
    }

    if (true) {
      return rest;
    } else {
      return rest;
    }
  }
}

// nested reference with root reference
function r() {
  if (noNeedToWork) return 0;

  for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    rest[_key5] = arguments[_key5];
  }

  if (lol) rest;
  rest;
}

// nested functions
function a() {
  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  return function () {
    function b() {}

    console.log("Shouldn't args be from a's scope?", args);
  };
}
