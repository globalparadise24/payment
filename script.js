// script.js

function generateOrderNumber() {
    const now = new Date();
    const uniqueId = 'ORD' + now.getFullYear() + (now.getMonth() + 1).toString().padStart(2, '0') +
                     now.getDate().toString().padStart(2, '0') + now.getHours().toString().padStart(2, '0') +
                     now.getMinutes().toString().padStart(2, '0') + now.getSeconds().toString().padStart(2, '0') +
                     now.getMilliseconds().toString().padStart(3, '0');
    document.getElementById('orderNumber').innerText = uniqueId;
    document.getElementById('itemNumberInput').value = uniqueId + ', your-email@example.com';
}
