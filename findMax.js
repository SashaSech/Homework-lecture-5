// Задача: Дан массив чисел. Напишите функцию, которая находит максимальный элемент этого массива.
function findMax(array) {
    let maxElem = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxElem) {
            maxElem = array[i];
        }
    }
    return maxElem
}

const array = [10, 15, 20, 30, 25];
const array1 = [11, 0, -55, 401, 10, -100, 41]

console.log(findMax(array));
console.log(findMax(array1));