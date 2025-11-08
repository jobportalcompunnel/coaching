// const promise = new Promise(res => res(2));
// promise.then(v => {
//         console.log(v);  2
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);  4
//         return v * 2;
//     })
//     .finally(v => {
//         console.log(v); undefined
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v); 8
//     });
// ==> output 2 4 undefined 8
// finally call two times 