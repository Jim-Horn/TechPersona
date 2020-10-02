export function checkWebmSupport() {
    let video = document.createElement('video');
    return video.canPlayType('video/webm; codecs="vp8, vorbis"') === 'probably';
}

export const mathFns = {
    avg: (arr) => {
        const sum = arr.reduce(function (sum, value) {
            return sum + value;
        }, 0);

        return sum / arr.length;
    },
    stdDev: (values) => {
        const avg = mathFns.avg(values);

        const squareDiffs = values.map((value) => {
            const diff = value - avg;
            return diff * diff;
        });

        const avgSquareDiff = mathFns.avg(squareDiffs);

        return Math.sqrt(avgSquareDiff) || 1;
    },
    getNumbers: (arr) => arr.map((el) => el.value).filter(Number.isInteger),
};
