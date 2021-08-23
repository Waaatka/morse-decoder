const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const splitByChunks = (str, chunkSize) => {
    const result = []
    for (let i = 0; i < str.length; i+= chunkSize) {
        result.push(str.slice(i, i + chunkSize))
    }
    return result
}

function decode(expr) {
    return splitByChunks(expr, 10).map(x => {
        if (x === '**********') {
            return ' '
        }
        const key = splitByChunks(x, 2).map(y => {
            switch (y) {
                case '10': return '.'
                case '11': return '-'
                default: return ''
            }
        }).join('');
        return MORSE_TABLE[key]
    }).join('')
}

module.exports = {
    decode
}