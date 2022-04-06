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
            return console.log("\x1b[1m", "\x1b[37m", "\x1b[41m", 'Invalid instruction you cannot send data to memory from memory', "\x1b[0m")
        }
        if (source.includes('x') || (source.includes('h') && source.length > 2)) {
            w = 1
        } else {
            w = 0
        }
        if (!isNaN(source.replace('h', ''))) {
            if (source.toString().length >= 4 && !source.includes('h')) {
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
                    let rbym = RByMBinaryMap.get('D16')
                    let reg = RegisterBinaryMap.get(destination)
                    let binary8Bit = `1000 1010 ${mod}${reg.replace(reg.slice(2), '')} ${reg.slice(2)}${rbym}`;
                    let binary16Bit = `1000 1011 ${mod}${reg.replace(reg.slice(2), '')} ${reg.slice(2)}${rbym}`;
                    hexCode = ''
                    binary8Bit.split(' ').forEach(binaryNibble => {
                        hexCode += `${BinaryHexMap.get(binaryNibble)}`
                    })
                    console.log("\x1b[1m", "\x1b[37m", "\x1b[42m", `${hexCode}${lowerByte}${higherByte}h -> 8bit data`, "\x1b[0m")
                    hexCode = ''
                    binary16Bit.split(' ').forEach(binaryNibble => {
                        hexCode += `${BinaryHexMap.get(binaryNibble)}`
                    })
                    console.log("\x1b[1m", "\x1b[37m", "\x1b[43m", `${hexCode}${lowerByte}${higherByte}h -> 16bit data`, "\x1b[0m")
                } else {
                    return console.log("\x1b[1m", "\x1b[37m", "\x1b[41m", 'Invalid Instruction', "\x1b[0m")
                }
            } else {
                //immediate to register
                if (/[a-dA-D]/.test(destination)) {
                    binarycode = `1011 ${w}${RegisterBinaryMap.get(destination)}`
                    binarycode.split(' ').forEach(binaryNibble => {
                        hexCode += `${BinaryHexMap.get(binaryNibble)}`
                    })
                    console.log("\x1b[1m", "\x1b[30m", "\x1b[47m", `${hexCode}${source}`, "\x1b[0m")
                } else if (!isNaN(destination) && destination.length >= 4) {//immediate to memory
                    let mod = ModBinaryMap.get('0D')
                    let rbym = RByMBinaryMap.get('D16')
                    let binarycode = `1100 011${w} ${mod}00 0${rbym}`
                    binarycode.split(' ').forEach(binaryNibble => {
                        hexCode += `${BinaryHexMap.get(binaryNibble)}`
                    })
                    console.log("\x1b[1m", "\x1b[30m", "\x1b[47m", `${hexCode}${source}`, "\x1b[0m")
                } else {
                    return console.log("\x1b[1m", "\x1b[37m", "\x1b[41m", 'Invalid Instruction', "\x1b[0m")
                }
            }
        } else if (source.length <= 2 && destination.length <= 2) {//register to register
            let mod = ModBinaryMap.get('REG2REG')
            let reg = RegisterBinaryMap.get(source).replace(RegisterBinaryMap.get(source).slice(2), '')
            let rbym = `${RegisterBinaryMap.get(source).slice(2)}${RegisterBinaryMap.get(destination)}`
            // console.log(rbym)
            let binaryCode = `1000 100${w} ${mod}${reg} ${rbym}`
            let hexCode = ''
            binaryCode.split(' ').forEach(binaryNibble => {
                hexCode += `${BinaryHexMap.get(binaryNibble)}`
            })
            console.log("\x1b[1m", "\x1b[37m", "\x1b[45m", `${hexCode}h`, "\x1b[0m")
        } else if (source.length <= 2 && !isNaN(destination) && destination.length >= 4) {//register to memory
            let lowerByte = destination.toString().slice(2);
            let higherByte = destination.replace(lowerByte, '');
            if (lowerByte.toString().length != 2) {
                lowerByte = `0${lowerByte}`
            }
            if (higherByte.toString().length != 2) {
                higherByte = `0${higherByte}`
            }
            let mod = ModBinaryMap.get('0D')
            let rbym = `${RegisterBinaryMap.get(source).slice(2)}${RByMBinaryMap.get('D16')}`
            let reg = RegisterBinaryMap.get(source).replace(RegisterBinaryMap.get(source).slice(2), '')
            binarycode = `1000 100${w} ${mod}${reg} ${rbym}`
            binarycode.split(' ').forEach(binaryNibble => {
                hexCode += `${BinaryHexMap.get(binaryNibble)}`
            })
            console.log("\x1b[1m", "\x1b[37m", "\x1b[44m", `${hexCode}${lowerByte}${higherByte}h`, "\x1b[0m")
        } else {
            if (w == 1) {
                let lowerByte = source.toString().slice(2);
                let higherByte = source.replace(lowerByte, '');
                if (lowerByte.toString().length != 2) {
                    lowerByte = `0${lowerByte}`
                }
                if (higherByte.toString().length != 2) {
                    higherByte = `0${higherByte}`
                }
            }
            if (/[a-dA-D]/.test(destination)) {
                binarycode = `1011 ${w}${RegisterBinaryMap.get(destination)}`
                binarycode.split(' ').forEach(binaryNibble => {
                    hexCode += `${BinaryHexMap.get(binaryNibble)}`
                })
                console.log("\x1b[1m", "\x1b[30m", "\x1b[47m", `${hexCode}${source}`, "\x1b[0m")
            } else if (!isNaN(destination) && destination.length >= 4) {
                //immediate to memory
                let mod = ModBinaryMap.get('0D')
                let rbym = RByMBinaryMap.get('D16')
                let binarycode = `1100 011${w} ${mod}00 0${rbym}`
                binarycode.split(' ').forEach(binaryNibble => {
                    hexCode += `${BinaryHexMap.get(binaryNibble)}`
                })
                console.log("\x1b[1m", "\x1b[30m", "\x1b[47m", `${hexCode}${source}`, "\x1b[0m")
            }
        }
    }
}

module.exports = { DataTransferInstructions: DataTransferInstructions }