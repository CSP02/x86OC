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

const RegisterBinaryMapForImmediateMode = new Map()
RegisterBinaryMapForImmediateMode.set('ax', '000')
RegisterBinaryMapForImmediateMode.set('al', '000')
RegisterBinaryMapForImmediateMode.set('cx', '001')
RegisterBinaryMapForImmediateMode.set('cl', '001')
RegisterBinaryMapForImmediateMode.set('dx', '010')
RegisterBinaryMapForImmediateMode.set('dl', '010')
RegisterBinaryMapForImmediateMode.set('bx', '011')
RegisterBinaryMapForImmediateMode.set('bl', '011')
RegisterBinaryMapForImmediateMode.set('ah', '100')
RegisterBinaryMapForImmediateMode.set('ap', '100')
RegisterBinaryMapForImmediateMode.set('ch', '101')
RegisterBinaryMapForImmediateMode.set('bp', '101')
RegisterBinaryMapForImmediateMode.set('dh', '110')
RegisterBinaryMapForImmediateMode.set('si', '110')
RegisterBinaryMapForImmediateMode.set('bh', '111')
RegisterBinaryMapForImmediateMode.set('di', '111')


module.exports = {
    BinaryHexMap: BinaryHexMap,
    RegisterBinaryMapForImmediateMode: RegisterBinaryMapForImmediateMode
}