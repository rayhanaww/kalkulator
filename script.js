// Tambahkan angka atau simbol ke layar
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Hitung hasil
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Input tidak valid!');
        clearDisplay();
    }
}

// Kosongkan layar
function clearDisplay() {
    document.getElementById('display').value = '';
}
