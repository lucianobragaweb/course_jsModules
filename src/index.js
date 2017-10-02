import { arrays, Xpto } from './helpers'

const a = arrays.map([1,2,3,4], x => x * x);
const b = arrays.filter([1,2,3,4], x => x > 3);

new Xpto()
console.log({ a, b })