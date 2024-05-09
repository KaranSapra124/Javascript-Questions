// // https://fakestoreapi.com/products

// fetch("https://fakestoreapi.com/products")
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     printData(data);
//   });

// function printData(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], "ARRAY");
//   }
// }

// API
// let apiData = "";
// let arr = [];
// fetch("https://fakestoreapi.com/products")
//   .then((data) => data.json())
//   .then((data) => {
//     apiData = data;
//     const filterArr = apiData.filter((elem) => elem.category == "women's clothing");
//     arr.push(...filterArr)
//     console.log(arr)
//   })
//   .catch((err) => {
//     console.log("Error ", err);
//   });

// Data fetch

// Step 1 -> URL
// Step 2 -> fetch (Promise)
// Step 3 -> Promise Resolve
// Step 4 -> Store the data

// let arr = [];

// // https://fakestoreapi.com/products Step 1 ✔
// function fetchApi(url) {
//   //Step 2 ✔
//   fetch(url)
//     .then(function (data) {
//       //Step 3 ✔
//       return data.json();
//     })
//     .then(function (data) {
//       arr = data //Step 4 ✔
//       console.log(arr)
//     });
// }

// fetchApi("https://fakestoreapi.com/products")

// Sum of Array elements
let arr = [1, 23, 45, 12];
let sum = 0;

function arrSum(num) {
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

console.log(arrSum(arr));

// End

