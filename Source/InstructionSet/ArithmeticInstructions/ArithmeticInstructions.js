const { ADD } = require('./add.js')
const { MUL } = require('./mul.js')
const { DIV } = require('./div.js')
class ArthimeticInstructions {
    findAddressingModeAndGenOpCode(instructions) {
        const opcode = instructions[0]
        const destination = instructions[1]
        const source = instructions[2]
        let binarycode = ''
        let hexCode = ''
        let w = 0
        if (opcode != 'mul' && opcode != 'div' && opcode != 'imul' && opcode != 'idiv') {
            if (!isNaN(source) && source.toString().length >= 4 && !isNaN(destination) && destination.toString().length >= 4) {
                return console.log("\x1b[1m", "\x1b[37m", "\x1b[41m", 'Invalid instruction you cannot send data to memory from memory', "\x1b[0m")
            }
            if (source.includes('x') || (source.includes('h') && source.length > 2)) {
                w = 1
            } else {
                w = 0
            }
        } else {
            if (source && destination) {
                return console.log("\x1b[1m", "\x1b[37m", "\x1b[41m", 'Invalid instruction', "\x1b[0m")
            }
            if (destination.includes('x') || (destination.includes('h') && destination.length > 2)) {
                w = 1
            } else {
                w = 0
            }
        }
        switch (opcode) {
            case 'add':
                const add = new ADD(source, destination, binarycode, hexCode, w)
                break;
            case 'mul':
                const mul = new MUL(source, destination, binarycode, hexCode, w)
                break;
            case 'div':
                const div = new DIV(source, destination, binarycode, hexCode, w)
                break;
            default:
                console.log('default')
                break;
        }
    }
}

module.exports = { ArthimeticInstructions: ArthimeticInstructions }