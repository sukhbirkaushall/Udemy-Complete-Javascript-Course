const hasDriversLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision); //AND
console.log(hasDriversLicence || hasGoodVision); //OR
console.log(!hasDriversLicence); //NOT

if (hasDriversLicence && hasGoodVision) console.log("You can drive")
else console.log("Someone else should drive")

const isTired = true; //C
if (hasDriversLicence && hasGoodVision && !isTired) console.log("You can drive")
else console.log("Someone else should drive")