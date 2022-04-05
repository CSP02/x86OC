const { BinaryHexMap, RegisterBinaryMap, ModBinaryMap, RByMBinaryMap } = require('../../Maps/BinaryHexCodeMap')

class DataTransferInstructions {
    findAddressingModeAndGenOpCode(instructions) {
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
                let lowerByte = source.toString().slice(2);
                let higherByte = source.replace(lowerByte, '');
                if (lowerByte.toString().length != 2) {
                    lowerByte = `0${lowerByte}`
                }
                if (higherByte.toString().length != 2) {
                    higherByte = `0${higherByte}`
                }
                if (/[a-dA-D]/.test(destination)) {
                    let mod = ModBinaryMap.get('0D')
                    let rbym = RByMBinaryMap.get('D16').replace(RByMBinaryMap.get('D16').slice(2), '')
                    let reg = `${RByMBinaryMap.get('D16').slice(2)}${RegisterBinaryMap.get(destination)}`
                    let binary8Bit = `1000 1000 ${mod}${rbym} ${reg}`;
                    let binary16Bit = `1000 1001 ${mod}${rbym} ${reg}`;
                    hexCode = ''
                    binary8Bit.split(' ').forEach(binaryNibble => {
                        hexCode += `${BinaryHexMap.get(binaryNibble)}`
                    })
                    console.log(`${hexCode}${lowerByte}${higherByte}h -> 8bit data`)
                    hexCode = ''
                    binary16Bit.split(' ').forEach(binaryNibble => {
                        hexCode += `${BinaryHexMap.get(binaryNibble)}`
                    })
                    console.log(`${hexCode}${lowerByte}${higherByte}h -> 16bit data`)
                } else {
                    return console.log('Invalid Instruction')
                }
            } else {
                if (/[a-dA-D]/.test(destination)) {
                    if (w == 0) {
                        binarycode = `1011 ${w}${RegisterBinaryMap.get(destination)}`
                        binarycode.split(' ').forEach(binaryNibble => {
                            hexCode += `${BinaryHexMap.get(binaryNibble)}`
                        })
                        console.log(`${hexCode}${source}`)
                    }
                } else if (!isNaN(destination) && destination.length >= 4) {
                    console.log('Immediate data as source and memory as destination')
                } else {
                    console.log('invalid instruction')
                }
            }
        } else if (source.length <= 2 && destination.length <= 2) {
            let mod = ModBinaryMap.get('REG2REG')
            let reg = RegisterBinaryMap.get(source).replace(RegisterBinaryMap.get(source).slice(2), '')
            let rbym = `${RegisterBinaryMap.get(source).slice(2)}${RegisterBinaryMap.get(destination)}`
            // console.log(rbym)
            let binaryCode = `1000 100${w} ${mod}${reg} ${rbym}`
            let hexCode = ''
            binaryCode.split(' ').forEach(binaryNibble => {
                hexCode += `${BinaryHexMap.get(binaryNibble)}`
            })
            console.log(`${hexCode}h`)
            // console.log('Register as source and register as destination')
        } else if (source.length <= 2 && !isNaN(destination) && destination.length >= 4) {
            console.log('Register as source and memory as destination')
        } else {
            let lowerByte = source.toString().slice(2);
            let higherByte = source.replace(lowerByte, '');
            if (lowerByte.toString().length != 2) {
                lowerByte = `0${lowerByte}`
            }
            if (higherByte.toString().length != 2) {
                higherByte = `0${higherByte}`
            }
            console.log(lowerByte, higherByte)
        }
    }
}

module.exports = { DataTransferInstructions: DataTransferInstructions }