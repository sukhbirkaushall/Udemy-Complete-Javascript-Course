function cutieces(fruit) {
    return fruit * 4;
}

function fruits(apples, oranges) {
    const applePieces = cutieces(apples)
    const orangePieces = cutieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
    return juice;
}
console.log(fruits(2, 2))