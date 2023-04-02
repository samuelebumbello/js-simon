// Elements \\
const numbers = [];

// Genero i numeri random (5) \\
while (numbers.length < 5) {
    const numGen = Math.floor(Math.random() * 100) + 1;

    if (!numbers.includes(numGen)){
        numbers.push(numGen);
    }
    console.log(numGen);
}

// Pusho i numeri random sull'HTML \\
const numDiv = document.getElementById('numbers');
// Restituisco una stringa ai numeri dell'array \\
numDiv.innerHTML = numbers.join(' ');

// Creo il TIMER 
setTimeout(function() {
    numDiv.innerHTML = '';
}, 4000);

setTimeout(() => {
// Chiedo all'utente di inserire i 5 numeri \\
    const numUser = [];
    for (let i = 1; i <= 5; i++) {
    const choiceNum = parseInt(prompt(`Inserisci il numero ${i}`))
    numUser.push(numUser);
    console.log(choiceNum);
    }
// Verifico quali numeri sono stati indonvinati \\
    const sameNumber = [];
    for (const choiceNum of numUser) {
        if (numbers.includes(numUser)) {
            sameNumber.push(numUser);
        }
    }

// Stampo il risultato \\
    if (sameNumber.length === 0) {
        document.getElementById('msg2').textContent = (`Riprova, i numeri inseriti non corrispondono.`);
    }else {
        document.getElementById('msg1').textContent = (`Sei riuscito a trovare ${sameNumber.length} numeri: ${sameNumber.join(' ')}`);
    }
},5000);