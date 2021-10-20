const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz".split('');
const alphabetLength = 36;

export function* genImgId() {

    let counter = [0,0,0,0,0,0]
    let result;


    while (counter !== [35,35,35,35,35,35]) {
        result = counter.map(idx => alphabet[idx]);

        yield result.join('');

        // increase position by one and do overflow detection
        counter[5]++;
        counter = fixOverflows(counter);
    }

    return "done!";
}

function fixOverflows(counter: number[]) {
    for (let i = 5; i >= 0; i--) {
        const currentIndex = counter[i];
        const overflow = currentIndex - 35;

        if (overflow > 0) {
            counter[i] = 0
            if (i !== 0) {
                counter[i - 1] += overflow;
                return counter;
            } else {
                throw 'finished!'
            }
        }

    }

    return counter
}
