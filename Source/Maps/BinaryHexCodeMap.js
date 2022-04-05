const BinaryHexMap = new Map();
BinaryHexMap.set('0000', 0)
BinaryHexMap.set('0001', 1)
BinaryHexMap.set('0010', 2)
BinaryHexMap.set('0011', 3)
BinaryHexMap.set('0100', 4)
BinaryHexMap.set('0101', 5)
BinaryHexMap.set('0110', 6)
BinaryHexMap.set('0111', 7)
BinaryHexMap.set('1000', 8)
BinaryHexMap.set('1001', 9)
BinaryHexMap.set('1010', 'A')
BinaryHexMap.set('1011', 'B')
BinaryHexMap.set('1100', 'C')
BinaryHexMap.set('1101', 'D')
BinaryHexMap.set('1110', 'E')
BinaryHexMap.set('1111', 'F')

const RegisterBinaryMap = new Map()
RegisterBinaryMap.set('ax', '000')
RegisterBinaryMap.set('al', '000')
RegisterBinaryMap.set('cx', '001')
RegisterBinaryMap.set('cl', '001')
RegisterBinaryMap.set('dx', '010')
RegisterBinaryMap.set('dl', '010')
RegisterBinaryMap.set('bx', '011')
RegisterBinaryMap.set('bl', '011')
RegisterBinaryMap.set('ah', '100')
RegisterBinaryMap.set('sp', '100')
RegisterBinaryMap.set('ch', '101')
RegisterBinaryMap.set('bp', '101')
RegisterBinaryMap.set('dh', '110')
RegisterBinaryMap.set('si', '110')
RegisterBinaryMap.set('bh', '111')
RegisterBinaryMap.set('di', '111')

const ModBinaryMap = new Map()
ModBinaryMap.set('16D', '10')
ModBinaryMap.set('8D', '01')
ModBinaryMap.set('0D', '00')
ModBinaryMap.set('REG2REG', '11')

const RByMBinaryMap = new Map()
RByMBinaryMap.set('BXSI', '000')
RByMBinaryMap.set('BXDI', '001')
RByMBinaryMap.set('BPSI', '010')
RByMBinaryMap.set('BPDI', '011')
RByMBinaryMap.set('SI', '100')
RByMBinaryMap.set('DI', '101')
RByMBinaryMap.set('D16', '110')
RByMBinaryMap.set('BX', '111')



module.exports = {
    BinaryHexMap: BinaryHexMap,
    RegisterBinaryMap: RegisterBinaryMap,
    RByMBinaryMap: RByMBinaryMap,
    ModBinaryMap: ModBinaryMap
}