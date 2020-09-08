import { mathFns } from '../../utils';
export default function (arr) {
    if (arr.length !== 13) {
        return { error: `expected an Array with 13 elements, received ${arr.length}` };
    }

    const ints = mathFns.getNumbers(arr);
    console.log('ints: ', ints);

    if (ints < 13) {
        return { error: `expected an Array with 13 digits, received ${ints.length}: ${ints}` };
    }

    return {
        mean: mathFns.avg(arr),
        stdDev: mathFns.stdDev(arr),
    };
}
