import { mathFns } from './utils';

describe(`mathFns.avg functionality`, () => {
    [
        {
            arg: [1, 2, 3],
            result: 2,
        },
        {
            arg: [2, 4, 6],
            result: 4,
        },
        {
            arg: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
            result: 3.769230769230769,
        },
        {
            arg: [0],
            result: 0,
        },
        {
            arg: [],
            result: NaN,
        },
        {
            arg: ['a', 1],
            result: NaN,
        },
    ].forEach(runTest);

    function runTest({ arg, result }) {
        test(`average of ${JSON.stringify(arg)} should equal ${result}`, () => {
            expect(mathFns.avg(arg)).toEqual(result);
        });
    }
});

describe(`mathFns.stdDev functionality`, () => {
    [
        {
            arg: [1, 2, 3],
            result: 0.816496580927726,
        },
        {
            arg: [2, 4, 6],
            result: 1.632993161855452,
        },
        {
            arg: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
            result: 1.8873606379054304,
        },
        {
            arg: [0],
            result: 0,
        },
        {
            arg: [],
            result: NaN,
        },
        {
            arg: ['a', 1],
            result: NaN,
        },
    ].forEach(runTest);

    function runTest({ arg, result }) {
        test(`standard deviation of ${JSON.stringify(arg)} should equal ${result}`, () => {
            expect(mathFns.stdDev(arg)).toEqual(result);
        });
    }
});

describe(`mathFns.getNumbers functionality`, () => {
    const makeObj = (arr) => arr.map((val) => ({ value: val }));
    [
        {
            arg: makeObj([1, 2, 3]),
            result: [1, 2, 3],
        },
        {
            arg: makeObj([2, 4, 6]),
            result: [2, 4, 6],
        },
        {
            arg: makeObj([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1]),
            result: [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1],
        },
        {
            arg: makeObj([]),
            result: [],
        },
        {
            arg: makeObj(['a', 1]),
            result: [1],
        },
        {
            arg: makeObj(['a', 1, 8.795]),
            result: [1],
        },
    ].forEach(runTest);

    function runTest({ arg, result }) {
        test(`extracting numbers from ${JSON.stringify(arg)} should equal [${result}]`, () => {
            expect(mathFns.getNumbers(arg)).toEqual(result);
        });
    }
});
