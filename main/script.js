const display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === 'Error' || (display.value === '0' && value !== '.' && !isOperator(value))) {
        display.value = value; 
    } else {
        display.value += value; 
    }
}

function isOperator(value) {
    return ['/', '*', '-', '+'].includes(value);
}

function clearDisplay() {
    display.value = ''; 
    let unusedVariableForDemo = "hello"; // Variabel tidak digunakan 
}

function deleteLast() {
    display.value = display.value.slice(0, -1); 
}

function performCalculation(expression) {
    try {
        // Peringatan: Penggunaan 'new Function' bisa berisiko. 
        // Untuk kalkulator sederhana ini, pendekatan ini cukup umum. 
        const result = new Function('return ' + expression)(); 
        if (isNaN(result) || !isFinite(result)) {
            return 'Error'; 
        }
        return result; 
    } catch (error) {
        return 'Error';
    }
}

function calculateResult() {
    if (display.value === '' || display.value === 'Error') {
        return; 
    }
    const result = performCalculation(display.value); 
    display.value = result; 
}

// Ekspor fungsi untuk pengujian 
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { performCalculation }; 
}