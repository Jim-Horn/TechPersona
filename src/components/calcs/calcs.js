import { mathFns } from '../../utils';
import { personas } from '../../constants';

export default function (arr) {
    console.log('arr: ', arr);
    if (arr.length !== 13) {
        return { error: `expected an Array with 13 elements, received ${arr.length}` };
    }

    const ints = mathFns.getNumbers(arr);
    console.log('ints: ', ints);

    if (ints < 13) {
        return { error: `expected an Array with 13 digits, received ${ints.length}: ${ints}` };
    }

    function calcValues(arr) {
        const personaValues = arr.map(addValues);
        const results = {};

        Object.keys(personas).forEach(
            (persona) => (results[persona] = personaValues.reduce((acc, el) => el[persona], 0))
        );
        return { personaValues, results };

        function addValues(item) {
            Object.keys(item.weights).forEach((el) => (item[el] = item.value * item.weights[el]));

            return item;
        }
    }

    function getMax(obj) {
        return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
    }

    const calcs = calcValues(arr);

    return {
        mean: mathFns.avg(ints),
        stdDev: mathFns.stdDev(ints),
        initialValues: ints,
        personaValues: calcs.personaValues,
        results: calcs.results,
        persona: getMax(calcs.results),
    };
}
