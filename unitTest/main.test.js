//*C1:const sum = require('./main');

//*C2:
import { sum, multiply } from './main'
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('10 * 10 to equal 100', () => {
    expect(multiply(10, 10)).toBe(100);
});