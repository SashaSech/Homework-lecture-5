// Проверить является ли число простым
const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(1));