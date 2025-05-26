// Задача: Дана строка. Напишите программу, которая считает количество гласных символов ('a', 'e', 'i', 'o', 'u') в этой строке.
function countVowels(inputString) {
    const newInputString = inputString.toLowerCase();
    let countVowel = 0;
    for (const char of newInputString) {
        if (char == 'a' || char == 'e' || char === 'i' || char === 'o' || char === 'u') {
            countVowel++;
        }
    }
    return countVowel;
}

console.log(countVowels('Hello World'));