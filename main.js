
const apiLink = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
const inputBox = document.getElementById('qr-input-box');
const qrBox = document.getElementById('qr-img-box');
const qrImage = document.getElementById('qr-img');
const generateBtn = document.getElementById('generate-btn');

const generateQR = () => {
    qrImage.src = apiLink + inputBox.value;
    qrBox.classList.remove('hidden');
    qrBox.classList.add('shown');
}

generateBtn.addEventListener('click', () => {
    if (inputBox.value !== '') {
        generateQR();
    }
    else {
        qrBox.classList.add('hidden');
        qrBox.classList.remove('shown');
        inputBox.focus();
        inputBox.classList.add('error');
        setTimeout(() => {
            inputBox.classList.remove('error');
        }, 400);
    }
});

inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        generateBtn.click();
    }
})


