/**
 * 1. Write a One liner JavaScript function to create an array of objects from an array of strings in the format:
 */
const input = ['Dirk', 'Plato', 'Gwen'];
const output = [
  {
    index: 0,
    name: 'Dirk',
  },
  {
    index: 1,
    name: 'Plato',
  },
  {
    index: 2,
    name: 'Gwen',
  },
];

console.log(
  'Arr to Obj: ',
  input.map((x, i) => ({ index: i, name: x }))
);

/**
 * 2. Write a one liner function to calculate the total amount donated
 * to a charity by all donors.
 * The data is presented in an array of objects:
 */
const donorsInfo = [
  {
    name: 'Donor1',
    amount: 1000,
  },
  {
    name: 'Donor1',
    amount: 500,
  },
  {
    name: 'Donor1',
    amount: 500,
  },
];

console.log(
  'sum ',
  donorsInfo.reduce((sum, obj) => sum + obj.amount, 0)
);

/**
 * 3. Write a one liner Function in JS to get all the keys of an object
 *  in an array in lowercase.
 */
const object = {
  firstName: 'val',
  lastName: 'val',
};
const outputLowerCase = ['firstname', 'lastname'];

console.log(
  'to lowercase: ',
  Object.keys(object).map((key) => key.toLowerCase())
);

/**
 * 4. Write a JS Function to get the first index of the nth
 * largest element in an array that satisfies a condition.
 * EG:
 * In an array of donors as below:
 */
const donorsInfo2 = [
  {
    name: 'Donor1',
    amount: 1500,
  },
  {
    name: 'Donor4',
    amount: 7500,
  },
  {
    name: 'Donor5',
    amount: 11500,
  },
  {
    name: 'Donor1',
    amount: 2500,
  },
  {
    name: 'Donor1',
    amount: 5500,
  },
];
/**
 * Consider only the donors who have donated more than 5000 and
 * find the first index of the nth largest donor.
 */

const fun1 = (arr, n, cond) => {
  n -= 1;
  let carr = [...arr];
  carr = carr.filter((x) => cond(x));
  carr.sort((a, b) => b.amount - a.amount);

  result = carr[n].amount;

  return arr.findIndex((x) => x.amount == result);
};

console.log(
  'nth largest index: ',
  fun1(donorsInfo2, 1, (x) => x.amount > 5000)
);

/**
 * 5. Write a JavaScript function to find the largest level of
 * nesting for arrays.
 * Assume that we do not have circular references.
 */
const myNestedArray = [[[1, 2, 3]], 4, 5, 6, [[[[[7, 8, [9, [10]]]]]]]];
// Answer: 8

const fun2 = (arr) => {
  // if (!Array.isArray(arr)) return 0;
  // max = 0;

  // for (val of arr) {
  //   if (Array.isArray(val)) {
  //     max = Math.max(max, fun2(val));
  //   }
  // }
  // return max + 1;
  // return Math.max(...arr.map((x) => fun2(x))) + 1;
  return (
    (Math.max(...arr.filter((x) => Array.isArray(x)).map((x) => fun2(x))) | 0) +
    1
  );
};

console.log('levels of nesting: ', fun2(myNestedArray));

/**
 * 6. Write a JavaScript program to get the index of the function in an
 * array of functions
 * which executed the fastest.
 * You cannot run a function more than once.
 */

const speeder = (func) => {
  const start = performance.now();
  func();
  return performance.now() - start;
};

const fun3 = (arr) => {
  const speed = arr.map((x) => speeder(x));
  return speed.indexOf(Math.min(...speed));
};

const funArr = [
  () => {
    for (let i = 0; i < 1000; i++);
  },
  () => {
    for (let i = 0; i < 10000000; i++);
  },
  () => {
    for (let i = 0; i < 100; i++);
  },
];

console.log('index of fastest func: ', fun3(funArr));

/**
 * 7. Write a JS Function (2 liner??) to get the the nth largest element
 * in an array of objects based on a sort function. This index must be
 *  only among those
 * elements that satisfy a condition as provided by a callbackFn
 * Where the sortfunction, the `n` and the condition are params.
 * eg:
 */
const donorsInfo3 = [
  {
    name: 'Donor1',
    amount: 1500,
  },
  {
    name: 'Donor1',
    amount: 2500,
  },
  {
    name: 'Donor1',
    amount: 5500,
  },
];
const getNthIndex = (arr, n, sortFunction, conditionCallBack) => {
  n -= 1;
  let carr = [...arr];
  carr = carr.filter((x) => {
    return conditionCallBack(x);
  });
  // console.log(arr, carr);
  carr = sortFunction(carr);
  // console.log(carr);

  result = carr[n].amount;
  // console.log(result);

  return arr.findIndex((x) => x.amount == result);
};

console.log(
  'nth largest index: ',
  getNthIndex(
    donorsInfo2,
    1,
    (arr) => {
      return arr.sort((a, b) => b.amount - a.amount);
    },
    (x) => x.amount > 5000
  )
);

const fun = async () => {
  let d2 = {};
  try {
    const data = await P1();
    d2 = await P2(data);
  } catch (error) {
    d2 = await P3();
  } finally {
    await P4(d2);
  }
};

P1.then(async (data) => {
  let d2 = {};
  try {
    d2 = await P2(data);
    // await P4(d2);
  } catch (error) {
    d2 = error;
    // await P4(error);
  } finally {
    await P4(d2);
  }
})
  .catch((data) => P3(data))
  .then((data) => P4(data));
