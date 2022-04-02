const InstructionSetMap = new Map()
InstructionSetMap.set('DTI', ['mov'])
InstructionSetMap.set('AI', ['add', 'sub', 'mul', 'div'])

module.exports = {InstructionSetMap : InstructionSetMap}