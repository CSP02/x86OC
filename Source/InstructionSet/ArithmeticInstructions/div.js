const { BinaryHexMap, RegisterBinaryMap, ModBinaryMap, RByMBinaryMap } = require('../../Maps/BinaryHexCodeMap')
const { MnemonicsToBinaryMap } = require('../../Maps/MnemonicsToBinaryMap')

class DIV {
    constructor(source, destination, binarycode, hexCode, w) {
        let mod = ''
        let rbym = ''
        if (/[a-dA-D]/.test(destination)) {
            mod = ModBinaryMap.get('REG2REG')
            rbym = RegisterBinaryMap.get(destination)
            binarycode = MnemonicsToBinaryMap.get('DIV').replace('w', w).replace('mod', mod).replace('rbym', rbym)
            binarycode.split(' ').forEach(binaryNibble => {
                hexCode += BinaryHexMap.get(binaryNibble)
            });
            if (w == 1)
                console.log("\x1b[1m", "\x1b[37m", "\x1b[45m", `${hexCode}h ---> 16 BIT`, "\x1b[0m")
            else if (w == 0)
                console.log("\x1b[1m", "\x1b[37m", "\x1b[45m", `${hexCode}h ---> 8 BIT`, "\x1b[0m")
        } else {
            mod = ModBinaryMap.get('0D')
            rbym = RByMBinaryMap.get('D16')
            binarycode = MnemonicsToBinaryMap.get('DIV').replace('w', w).replace('mod', mod).replace('rbym', rbym)
            binarycode.split(' ').forEach(binaryNibble => {
                hexCode += BinaryHexMap.get(binaryNibble)
            });
            if (w == 1)
                console.log("\x1b[1m", "\x1b[37m", "\x1b[43m", `${hexCode}h`, "\x1b[0m")
            else if (w == 0)
                console.log("\x1b[1m", "\x1b[37m", "\x1b[42m", `${hexCode}h`, "\x1b[0m")
        }
    }
}

class IDIV {
    constructor(source, destination, binarycode, hexCode, w) {

    }
}

module.exports = {
    DIV: DIV,
    IDIV: IDIV
}