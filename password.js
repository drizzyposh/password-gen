// Variables
const alphabetCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$&%/()=?^@\\./_-0123456789';

let output = document.getElementById('output');

// Functions
const randomValue = (value) => {
    return Math.floor(Math.random() * value)
}

function generatePassword() {
    let length = document.getElementById('length').value
    document.getElementById('length-value').textContent = length;
    let password = '';

    for (let i = 0; i < length; i++) {
        let random = randomValue(alphabetCharacters.length);
        password += alphabetCharacters.charAt(random);
    }
    output.value = password;
}

function copyToClipboard() {
    output.select();
    document.execCommand('copy');
    alert('Password Copied')
}

generatePassword()