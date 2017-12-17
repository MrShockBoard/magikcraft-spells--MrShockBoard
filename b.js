const magik = magikcraft.io;

function b() {
    const font={
    b:[192,192,192,192,252,194,194,252]
}
function binary(letter){
    return letter.map(line=>
    line.tostring(2))
}
const a=binary(font.b)
a.forEach(line=>magik.dixit(line));