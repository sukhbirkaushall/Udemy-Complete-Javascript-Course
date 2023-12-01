const arr = [1, 2, 3, 4, 5, 6, 7]

const x = new Array(7);  // empty array with length = 7  i.e. [ <7 empty items> ]
console.log(x)

//fill method
x.fill(1)
console.log(x)   // [1, 1, 1, 1, 1, 1, 1]
console.log(x.fill(1, 2, 4))  //[ <2 empty items>, 1, 1, <3 empty items> ]

arr.fill(23, 2, 6);
console.log(arr)

//Array.from
const y = Array.from({ length: 7 }, () => 1)   // [1, 1, 1, 1, 1, 1, 1]
console.log(y)

const z = Array.from({ length: 7 }, (_, i) => i + 1)
console.log(z)   // [1, 2, 3, 4, 5, 6, 7]

// in bankist
labelBalance.addEventListener('click', function(){
    const movementsUI = Array.from(
      document.querySelectorAll('.movements__value'),el=>Number(el.textContent.replace('EUR', ""))
      )
      console.log(movementsUI)
  })