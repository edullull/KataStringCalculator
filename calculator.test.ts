import { Add } from './calculator';

test('should return 0', () => {
    expect(Add("")).toEqual(0);
    expect(Add("1")).toEqual(1);
});

test('should return 1', () => {
    expect(Add("1")).toEqual(1);
});

test('should add two number return the first possition', () => {
    expect(Add("1,0")).toEqual(1);
});

test('should add two numbers return sum ', () => {
    expect(Add("1,2")).toEqual(3);
});
test('should add two numbers return sum ', () => {
    expect(Add("10,2")).toEqual(12);
});
test('should add three numbers return sum ', () => {
    expect(Add("10,2,1")).toEqual(13);
});
test('should add four numbers return sum ', () => {
    expect(Add("10,2,1,3")).toEqual(16);
});