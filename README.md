# x86OC
![x86OC](https://github.com/Chandra-sekhar-pilla/x86OC/Resources/x86OC.png)
An opcode converter for x86 microprocessor instructions.

# Usage:
- Download or clone the repo.
- Type ``cd source`` and then type ``node x86oc``.
- Type the instruction and press enter.

# Representation of different addressing modes in console:
Bg-color | Fg-color | Addressing Mode
-------- | -------- | ---------------
![#ffffff](https://via.placeholder.com/150x40/ffffff/000000?text=White) | ![#000000](https://via.placeholder.com/150x40/000000/ffffff?text=Black) | Immediate
![#ff0000](https://via.placeholder.com/150x40/ff0000/000000?text=Red) | ![#ffffff](https://via.placeholder.com/150x40/ffffff/000000?text=White) | Invalid addressing
![#9e00c2](https://via.placeholder.com/150x40/9e00c2/000000?text=Purple) | ![#ffffff](https://via.placeholder.com/150x40/ffffff/000000?text=White) | Register to Register
![#003e8a](https://via.placeholder.com/150x40/003e8a/000000?text=Blue) | ![#ffffff](https://via.placeholder.com/150x40/ffffff/000000?text=White) | Register to Memory
![#0b8a00](https://via.placeholder.com/150x40/0b8a00/000000?text=Green) | ![#ffffff](https://via.placeholder.com/150x40/ffffff/000000?text=White) | Memory to Register-8Bit
![#a8c200](https://via.placeholder.com/150x40/a8c200/000000?text=Yellow) | ![#ffffff](https://via.placeholder.com/150x40/ffffff/000000?text=White) | Memory to Register-16Bit

# Note:
**This package uses nodejs. so you should have installed nodejs in your device.**
# Note:
**This package is still in development and it can only convert transfer instruction to their opcodes in almost all addressing modes. Remaining instruction will be coded and released soon. If the user notices any bugs they can create a issue report or a pull request.**

# NOTE: This package or project is still in development and contributors are welcomed. Right now it only converts the immediate addressing mode data transfer instructions. So to make it for every addressing mode I will work on it. Contributions are appreciated