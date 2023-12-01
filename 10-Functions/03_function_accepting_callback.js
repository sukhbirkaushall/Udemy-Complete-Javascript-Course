const oneWord = function (str) {
    return str.replaceAll(" ", '');
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join('')
};

//Higher Order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformer string: ${fn(str)}`)
    console.log(`Transformed by : ${fn.name}`)
}
transformer('Javascript is the best', upperFirstWord)
transformer('Javascript is the best', oneWord)