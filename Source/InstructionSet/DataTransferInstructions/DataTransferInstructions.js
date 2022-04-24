const { MOV } = require('./MOV.js')
class DataTransferInstructions {
    findAddressingModeAndGenOpCode(instructions) {
        const opcode = instructions[0]
        const destination = instructions[1]
        const source = instructions[2]
        let binarycode = ''
        let hexCode = ''
        let w = 0
        if (!isNaN(source) && source.toString().length >= 4 && !isNaN(destination) && destination.toString().length >= 4) {
            return console.log("\x1b[1m", "\x1b[37m", "\x1b[41m", 'Invalid instruction you cannot send data to memory from memory', "\x1b[0m")
        }
        if (source.includes('x') || (source.includes('h') && source.length > 2)) {
            w = 1
        } else {
            w = 0
        }
        switch (opcode) {
            case 'mov':
                const mov = new MOV(source, destination, binarycode, hexCode, w)
                break;
            default:
                console.log('default')
                break;
        }
    }
}

module.exports = { DataTransferInstructions: DataTransferInstructions }