(() => (console.log(`Згенеровані числа: ${numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1)}\nВідсортовані числа: ${(sortedNumbers = numbers.slice().sort((a, b) => a - b))}\nМінімальне число: ${Math.min(...numbers)}\nМаксимальне число: ${Math.max(...numbers)}\nСума: ${(totalSum = numbers.reduce((acc, num) => acc + num, 0))}\nСереднє: ${(totalSum / numbers.length).toFixed(2)}\nПарні: ${numbers.filter(num => num % 2 === 0).length}\nНепарні: ${numbers.filter(num => num % 2 !== 0).length}`)))()
