document.getElementById('calculator').addEventListener('click', function (event) {
    const digits = event.target.innerText;
    const textField = document.getElementById('input-display');
    const textFieldValue = textField.value;
    textField.value = textFieldValue + digits;
    if (digits === 'C') {
        textField.value = '';
    }
    else if (digits === '<') {
        const stringSplit = textFieldValue.split('');
        const stringField = stringSplit.pop();
        const stringJoin = stringSplit.join('');
        textField.value = stringJoin;
    }
})

function generateNumber() {
    const generateNumber = Math.round(Math.random() * 10000);
    const generateNumberString = generateNumber + '';
    const generteField = document.getElementById('generate-display');
    const generateFieldString = generteField.value;
    if (generateNumberString.length === 4) {

        generteField.value = generateNumberString;
    }
    else {
        return generateNumber();
    }
}
document.getElementById('generate-btn').addEventListener('click', function () {
    // const generateNumber = Math.round(Math.random() * 1000 + 1234);
    generateNumber();
})

const success = document.getElementById('success');
success.style.display = 'none';
const fail = document.getElementById('fail');
fail.style.display = 'none';

document.getElementById('submit-button').addEventListener('click', function () {
    // console.log('submit-button');
    const matchNumber = document.getElementById('input-display');
    const matchNumberString = matchNumber.value;
    const generateNumber = document.getElementById('generate-display');
    const generateNumberString = generateNumber.value;

    if (matchNumberString === generateNumberString) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        fail.style.display = 'block';
        success.style.display = 'none';
    }
    const tryLeft = document.getElementById('action-left');
    const tryLeftString = tryLeft.innerText;
    const tryInt = parseInt(tryLeftString);
    tryLeft.innerText = tryInt + 1;
})