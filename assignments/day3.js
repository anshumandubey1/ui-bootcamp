const object1 = {
  a: 1,
  b: 2,
  c: {
    d: 1 / 3,
    e: { f: 4, k: true },
    g: 'Hello',
    h: [
      24,
      "Something Doesn't Feel Right",
      0.023,
      {
        i: 234,
        l: 'We are going too deep',
        m: [
          5,
          6,
          7,
          true,
          false,
          "It's still an object, right?",
          {
            n: 45.23,
            o: [{ p: [{ q: ['probably!'] }] }],
          },
        ],
      },
      false,
    ],
  },
};

const object2 = {
  a: 1,
  b: 2,
  c: {
    d: 1 / 3,
    e: { f: 4, k: true },
    g: 'Hello',
    h: [
      24,
      "Something Doesn't Feel Right",
      0.023,
      {
        i: 234,
        l: 'We are going too deep',
        m: [
          5,
          6,
          7,
          true,
          false,
          "It's still an object, right?",
          {
            n: 45.23,
            o: [{ p: [{ q: ['probably!'] }] }],
          },
        ],
      },
      false,
    ],
  },
};

// Write a function to check if 2 objects containing only primitive values or nested objects contain exactly the
// same values, i.e. they are the same. Hint: use typeof. eg: `if (typeof object1.c === 'object') {}`

const equals = (object1, object2) => {
  if (typeof object1 !== typeof object2) return false;
  if (typeof object1 !== 'object') return object1 === object2;
  keys = Object.keys(object1);
  if (keys.length != Object.keys(object2).length) return false;
  for (key of keys) {
    if (!equals(object1[key], object2[key])) return false;
  }
  return true;
};

console.log(equals(object1, object2));

// Implement the JSON.stringify method yourself for plain objects containing only primitive values. Bonus, if you
// can recursion for nested objects. The object does not contain values that are functions, circular references or
// functions...

const stringify = (object) => {
  if (typeof object !== 'object') {
    if (typeof object == 'string') return `"${object}"`;
    return String(object);
  }
  if (object instanceof Array) {
    return `[${object.map((x) => stringify(x))}]`;
  }
  const pairs = [];
  for (key of Object.keys(object)) {
    pairs.push(`"${key}":${stringify(object[key])}`);
  }
  return `{${pairs.join(',')}}`;
};

console.log(stringify(object1) === JSON.stringify(object1));
