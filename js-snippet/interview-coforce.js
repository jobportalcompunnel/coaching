//json object reader
const nested = {
  a: {
    b: {
      c: 42
    },
    d: 5
  },
  e: 'hello'
};
 
O/P:
{
  "a.b.c": 42,
  "a.d": 5,
  "e": "hello"
}

const flattenObject = (obj, parentKey = '', result = {}) => {
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};

const nested = {
  a: {
    b: {
      c: 42
    },
    d: 5
  },
  e: 'hello'
};

const flattened = flattenObject(nested);
console.log(flattened);