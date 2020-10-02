import { mathFns } from '../../utils';
import { personas } from '../../constants';

export default function (arr) {
    if (arr.length !== 13) {
        return { error: `expected an Array with 13 elements, received ${arr.length}` };
    }

    const userEnteredValues = mathFns.getNumbers(arr);

    if (userEnteredValues < 13) {
        return {
            error: `expected an Array with 13 digits, received ${userEnteredValues.length}: ${userEnteredValues}`,
        };
    }

    const mean = mathFns.avg(userEnteredValues);

    const stDev = mathFns.stDev(userEnteredValues);

    function calcValues(arr) {
        const personaValues = arr.map(addValues);
        const results = {};

        Object.keys(personas).forEach(
            (persona) =>
                (results[persona] = personaValues.reduce((acc, el, id) => {
                    console.log(
                        'id, acc, persona, el.calculatedValues[persona]: ',
                        id,
                        acc,
                        persona,
                        el.calculatedValues[persona]
                    );
                    return acc + el.calculatedValues[persona];
                }, personas[persona].Constant))
        );
        return { personaValues, results };

        function getCenteredScore(val) {
            return (val - mean) / stDev;
        }

        function addValues(item) {
            item.centeredScore = getCenteredScore(item.value);
            Object.keys(item.weights).forEach(
                (el) => (item.calculatedValues[el] = item.centeredScore * item.weights[el])
            );

            return item;
        }
    }

    function getKeyNameOfMaxObjValue(obj) {
        return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
    }

    const calculatedValues = calcValues(arr);

    return {
        mean,
        stDev,
        initialValues: userEnteredValues,
        personaValues: calculatedValues.personaValues,
        results: calculatedValues.results,
        persona: getKeyNameOfMaxObjValue(calculatedValues.results),
    };
}
