import { mathFns } from '../../utils';
import { personas } from '../../constants';

export default function(arr) {
    if (arr.length !== 13) {
        return { error: `expected an Array with 13 elements, received ${arr.length}` };
    }

    const userEnteredValues = mathFns.getNumbers(arr);

    if (userEnteredValues.length < 13) {
        return {
            error: `expected an Array with 13 digits, received ${userEnteredValues.length}: ${userEnteredValues}`,
        };
    }

    const mean = mathFns.avg(userEnteredValues);

    const stDev = mathFns.stDev(userEnteredValues);

    function calcValues(arr) {
        const personaValues = arr.map(addValues);
        const results = {};

        Object.keys(personas).forEach(calculateFinalPersonaTotals);

        function calculateFinalPersonaTotals(persona) {
            return (results[persona] = personaValues.reduce(reducePersonaValues, personas[persona].Constant));

            function reducePersonaValues(acc, el) {
                return acc + el.calculatedValues[persona];
            }
        }

        return { personaValues, results };

        function getCenteredScore(val) {
            return (val - mean) / stDev;
        }

        function addValues(item) {
            item.centeredScore = getCenteredScore(item.value);
            Object.keys(item.weights).forEach(addCalculatedValues);

            function addCalculatedValues(el) {
                return (item.calculatedValues[el] = item.centeredScore * item.weights[el]);
            }

            return item;
        }
    }

    function getKeyNameOfMaxObjValue(obj) {
        return Object.keys(obj).reduce(findKeyName);

        function findKeyName(a, b) {
            return obj[a] > obj[b] ? a : b;
        }
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
