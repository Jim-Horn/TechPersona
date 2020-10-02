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

    const mean = mathFns.avg(ints);
    console.log('mean: ', mean);

    const stDev = mathFns.stDev(ints);
    console.log('stDev: ', stDev);

    function calcValues(arr) {
        const personaValues = arr.map(addValues);
        const results = {};

        Object.keys(personas).forEach((persona) =>
            (results[persona] = personaValues.reduce(
                (acc, el) => el.calculatedValues[persona],
                personas[persona].Constant
            )));
        return { personaValues, results };

        function getCenteredScore(val) {
            return (val - mean) / stDev;
        }

        function addValues(item) {
            item.centeredScore = getCenteredScore(item.value);
            Object.keys(item.weights).forEach(
                (el) => (item.calculatedValues[el] = item.centeredScore * item.weights[el])
            );
            console.log('item: ', item);

            return item;
        }
    }

    function getMax(obj) {
        return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
    }

    const calcs = calcValues(arr);

    return {
        mean,
        stDev,
        initialValues: ints,
        personaValues: calcs.personaValues,
        results: calcs.results,
        persona: getMax(calcs.results),
    };
}
