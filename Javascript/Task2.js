function sortStringAlphabetically(str) {
    return str.split("").sort().join(""); 
}

let exampleString = "webmaster";
console.log(sortStringAlphabetically(exampleString)); // Expected Output: 'abeemrstw'
