import { map, reduce, filter } from './helpers/arrays'

const a = map([1,2,3,4], x => x * x);
const b = filter([1,2,3,4], x => x > 3);

console.log({ a, b })