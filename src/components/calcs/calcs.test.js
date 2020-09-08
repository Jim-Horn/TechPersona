import calcs from './calcs';
import weights from './weights';

const buildData = (arr) => arr.map((value, idx) => ({ value, weights: weights[idx].weights }));

describe('calcs - basic argument tests', () => {

    it(`expects an array with a length of 13`, () => {
        expect(calcs(buildData([1]))).toEqual({"error": "expected an Array with 13 elements, received 1"});
    });

    it(`expects an array with 13 digits`, () => {
        expect(calcs(buildData([1,2,3,4,5,6,7,8,9,10,11,12,'a']))).toEqual({"error": "expected an Array with 13 digits, received 12"});
    });

});
