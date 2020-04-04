const { makeKeyframes, makeKeyframePoints } = require('./slides');

describe('makeKeyframes', () => {
    it('should work', () => {
        const result = makeKeyframes(2)
        console.log(result)
    })
});

describe('makeKeyframePoints', () => {
    it('should work', () => {
        const result = makeKeyframePoints(2)
        console.log(result)
        expect(result).toEqual([
            {fadeStart: .875, fullStart: 0, fullStop: .375, fadeStop: .625},
            {fadeStart: .5, fullStart: .625, fullStop: 1, fadeStop: .125}
        ])
    })
})

// 8 secs, 2 sec transition
//     4s    |    4s
// slide 0
// 0s   1s   2s   3s   4s   5s   6s   7s   8s
// 100       100       0         0         100

// slide 1
// 0s   1s   2s   3s   4s   5s   6s   7s   8s
// 0         0         100       100       0
