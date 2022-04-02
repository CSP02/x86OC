const { BinaryHexMap } = require('../../Maps/BinaryHexCodeMap')
const { RegisterBinaryMapForImmediateMode } = require('../../Maps/BinaryHexCodeMap')

class DataTransferInstructions {
    findAddressingMode(instructions) {
        const opcode = instructions[0]
        const destination = instructions[1]
        const source = instructions[2]
        let binarycode = ''
        let hexCode = ''
        let w = 0
        if (!isNaN(source) && source.toString().length >= 4 && !isNaN(destination) && destination.toString().length >= 4) {
            return console.log('Invalid instruction you cannot send data to memory from memory')
        }
        if (source.includes('x')) {
            w = 1
        } else {
            w = 0
        }
        if (!isNaN(source.replace('h', ''))) {
            if (source.toString().length >= 4) {
                if (/[a-dA-D]/.test(destination)) {
                    console.log('Memory as source and register as destination')
                } else {
                    return console.log('Invalid Instruction')
                }
            } else {
                if (/[a-dA-D]/.test(destination)) {
                    if (w == 0) {
                        binarycode = `1011 ${w}${RegisterBinaryMapForImmediateMode.get(destination)}`
                        binarycode.split(' ').forEach(binaryNibble => {
                            hexCode += `${BinaryHexMap.get(binaryNibble)}`
                        })
                        console.log(`Immediate data as source and register as destination\n${hexCode}${source}`)
                    }
                } else if (!isNaN(destination)) {
                    console.log('Immediate data as source and memory as destination')
                }
            }
        } else if (source.length <= 2 && destination.length <= 2) {
            console.log('Register as source and register as destination')
        } else if (source.length <= 2 && !isNaN(destination) && destination.length >= 4) {
            console.log('Register as source and memory as destination')
        } else {
            return console.log('Invalid instruction')
        }
    }
}

module.exports = { DataTransferInstructions: DataTransferInstructions }