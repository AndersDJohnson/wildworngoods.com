const times = length => Array(length).fill(null).map((_, i) => i)

const makeKeyframePoints = (length) => times(length).map(i => {
        const fullStart = i / length;
        const fullStop = (i + 1) / length;
        let fadeStart = fullStart - (1 / length / 4);
        fadeStart = fadeStart < 0 ? 1 + fadeStart : fadeStart;
        let fadeStop = fullStop + (1 / length / 4);
        fadeStop = fadeStop > 1 ? fadeStop % 1 : fadeStop;

        return { fadeStart, fullStart, fullStop, fadeStop }
    });

const makeKeyframes = length => {
  const points = makeKeyframePoints(length)

    return times(length).map(i => `@keyframes slide-${i} {
        0% {
          opacity: ${i === 0 ? 1 : i === length - 1 ? 1 : 0};
        }
        ${points[i].fadeStart * 100}% {
          opacity: 0;
        }
        ${points[i].fullStart * 100}% {
          opacity: 1;
        }
        ${points[i].fullStop * 100}% {
          opacity: 1;
        }
        ${points[i].fadeStop * 100}% {
          opacity: 0;
        }
        100% {
          opacity: ${i === 0 ? 1 : i === length - 1 ? 1 : 0};
        }
    }`).join('\n')
};

exports.makeKeyframePoints = makeKeyframePoints;
exports.makeKeyframes = makeKeyframes;
