import { classifyStudent } from "./classifyStudent";

describe('classifyStudent()', () => {
    test('should return Invalid mark! when n < 0', () => {
        const value = classifyStudent(-1);
        expect(value).toBe('Invalid mark!');
    })
    test('should return Excellence! when n > 8', () => {
        const value = classifyStudent(9);
        expect(value).toBe('Excellence');

        const value1 = classifyStudent(10);
        expect(value1).toBe('Excellence');
    })
    test('should return Good! when n in [7,8]', () => {
        const value = classifyStudent(7);
        expect(value).toBe('Good');

        const value1 = classifyStudent(8);
        expect(value1).toBe('Good');
    })
    test('should return Not Good! when n in [4-6]', () => {
        [4, 5, 6].forEach((n) => {
            expect(classifyStudent(n)).toBe('Not Good');
        })
    })
    test('should return Bad! when n in [1-3]', () => {
        [1, 2, 3].forEach((n) => {
            expect(classifyStudent(n)).toBe('Bad');
        })
    })
})