// Elements //
const numbers = [];

// Genero i numeri random (5) //
while (numbers.length < 5) {
    const numGen = Math.floor(Math.random() * 100) + 1;

    if (!numbers.includes(numGen)){
        numbers.push(numGen);
    }
    console.log(numGen);
}