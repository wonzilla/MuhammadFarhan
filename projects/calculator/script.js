// script.js
// function appendToDisplay(value) {
//     document.getElementById('display').value += value;
// }

// function clearDisplay() {
//     document.getElementById('display').value = '';
// }

// function calculate() {
//     try {
//         const result = eval(document.getElementById('display').value);
//         document.getElementById('display').value = result;
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//         setTimeout(clearDisplay, 1000);
//     }
// }



// Append characters to display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Parse and evaluate the expression safely
function calculate() {
    const display = document.getElementById('display');
    const expression = display.value.replace(/×/g, '*'); // Replace × with * for parsing
    try {
        const result = evaluateExpression(expression);
        display.value = Number.isFinite(result) ? result : 'Error';
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}

// Tokenize the expression
function tokenize(expression) {
    const tokens = [];
    let currentNumber = '';
    
    for (let char of expression) {
        if (/\d|\./.test(char)) {
            currentNumber += char; // Build multi-digit or decimal numbers
        } else if (/[+\-*/]/.test(char)) {
            if (currentNumber) {
                tokens.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            tokens.push(char);
        } else if (char !== ' ') {
            throw new Error('Invalid character');
        }
    }
    
    if (currentNumber) {
        tokens.push(parseFloat(currentNumber));
    }
    console.log(tokens)
    return tokens;
}

// Evaluate with operator precedence (no parentheses yet)
function evaluateExpression(expression) {
    const tokens = tokenize(expression);
    console.log(tokens)
    if (tokens.length === 0) throw new Error('Empty expression');

    // First pass: Handle * and /
    const firstPass = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '*' || tokens[i] === '/') {
            const left = firstPass.pop();
            const operator = tokens[i];
            const right = tokens[++i];
            
            console.log(left)
            if (typeof left !== 'number' || typeof right !== 'number') {
                throw new Error('Invalid operands');
            }
            
            if (operator === '*' ) {
                firstPass.push(left * right);
            } else if (operator === '/' ) {
                if (right === 0) throw new Error('Division by zero');
                firstPass.push(left / right);
            }
        } else {
            firstPass.push(tokens[i]);
        }
    }
    console.log(firstPass)

    // Second pass: Handle + and -
    let result = firstPass[0];
    console.log(result)
    for (let i = 1; i < firstPass.length; i += 2) {
        const operator = firstPass[i];
        const right = firstPass[i + 1];
        
        if (typeof result !== 'number' || typeof right !== 'number') {
            throw new Error('Invalid operands');
        }
        
        if (operator === '+') {
            result += right;
        } else if (operator === '-') {
            result -= right;
        }
    }
    console.log(result) 

    return result;
}