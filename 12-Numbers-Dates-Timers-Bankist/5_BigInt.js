console.log(2 ** 53 - 1)
console.log(Number.MAX_SAFE_INTEGER)

console.log(429842039482403592485345938452490582452049585462304958n)
console.log(BigInt(429842039482403592485345938452490582452049585462304958))

//operations
console.log(1000n + 1000n);
console.log(239810298102471304374n * 23401238920931823n);

const huge = 3498137429348234982n;
const num = 23;
console.log(huge * BigInt(num))

// exceptions
console.log(20n > 15)
console.log(20n === 20)
console.log(20n == 20)

console.group( huge + ' is really big')

//divisions

console.log(10n / 3n)
console.log(10 / 3)