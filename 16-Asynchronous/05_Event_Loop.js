console.log('test start');  //call stack -1
setTimeout(() => console.log('0 second timer')); // callback queue -4
Promise.resolve('Resolved Promise 1').then(res => console.log(res))  // microtask queue -3
// Promise.resolve('Resolved Promise 2').then(res => {
//     for(let i =0; i<1000000000;i++){}
//     console.log(res)
// }) 
console.log('Test end')  //call stack -2