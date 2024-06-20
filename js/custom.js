let y = Math.floor(Math.random() * 100) + 1;
let guess = 1;
let dpTable = {};

document.getElementById("submitguess").onclick = function () {
    let x = parseInt(document.getElementById("guessField").value);

    if (isNaN(x)) {
        document.getElementById("result").innerText = "Пожалуйста, введите число.";
        return;
    }

    let hash = hashCode(x);
    let attempts;
    if (dpTable.hasOwnProperty(hash)) {
        attempts = dpTable[hash];
    } else {
        attempts = calculateAttempts(x);
        dpTable[hash] = attempts;
    }

    if (x === y) {
        document.getElementById("result").innerText = `ПОЗДРАВЛЯЕМ!!! Вы угадали число ${y} за ${attempts} попыток.`;
    } else if (x < y) {
        document.getElementById("result").innerText = `Попытка ${guess}: Вы не угадали. Попробуйте число больше.`;
    } else {
        document.getElementById("result").innerText = `Попытка ${guess}: Вы не угадали. Попробуйте число меньше.`;
    }
    guess++;
};

function calculateAttempts(num) {
    let count = 0;
    let tempNum = num;
    while (tempNum !== y) {
        if (tempNum < y) {
            tempNum++;
        } else {
            tempNum--;
        }
        count++;
    }
    return count + 1;
}

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Преобразование в 32-битное целое число
    }
    return hash;
}