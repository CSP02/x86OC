const BinaryHexMap = new Map(
    [['0000', 0],
    ['0001', 1],
    ['0010', 2],
    ['0011', 3],
    ['0100', 4],
    ['0101', 5],
    ['0110', 6],
    ['0111', 7],
    ['1000', 8],
    ['1001', 9],
    ['1010', 'A'],
    ['1011', 'B'],
    ['1100', 'C'],
    ['1101', 'D'],
    ['1110', 'E'],
    ['1111', 'F']]
)

const RegisterBinaryMap = new Map(
    [['ax', '000'],
    ['al', '000'],
    ['cx', '001'],
    ['cl', '001'],
    ['dx', '010'],
    ['dl', '010'],
    ['bx', '011'],
    ['bl', '011'],
    ['ah', '100'],
    ['sp', '100'],
    ['ch', '101'],
    ['bp', '101'],
    ['dh', '110'],
    ['si', '110'],
    ['bh', '111'],
    ['di', '111']]
)

const ModBinaryMap = new Map(
    [['16D', '10'],
    ['8D', '01'],
    ['0D', '00'],
    ['REG2REG', '11']]
)

const RByMBinaryMap = new Map(
    [['BXSI', '000'],
    ['BXDI', '001'],
    ['BPSI', '010'],
    ['BPDI', '011'],
    ['SI', '100'],
    ['DI', '101'],
    ['D16', '110'],
    ['BX', '111']]
)

module.exports = {
    BinaryHexMap: BinaryHexMap,
    RegisterBinaryMap: RegisterBinaryMap,
    RByMBinaryMap: RByMBinaryMap,
    ModBinaryMap: ModBinaryMap
}