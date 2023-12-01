function logger() {
    console.log("My name is Sukhbir");
}
logger(); // calling, running , invoking

function fruits(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}oranges`
    return juice;
}
const finalJuice = fruits(5, 0);
console.log(finalJuice)