// Задача: Напишите функцию, которая переворачивает строку.
const reverseString = (str) => {
    let finalString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        finalString += str[i];
    }
    return finalString;
} 

console.log(reverseString('hello'));